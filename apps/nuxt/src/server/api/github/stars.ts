import {
    defineEventHandler,
    getQuery,
    createError,
    appendCorsHeaders,
} from 'h3';
import { Octokit } from '@octokit/core';
import type { User } from '@octokit/graphql-schema';

const octokit = new Octokit({ auth: process.env.OCTOKIT_AUTH });

// TODO: consider making username param (because required) a part of the route path (as opposed to query)
export default defineEventHandler(async (event) => {
    // Enable CORS for the `kitchen-sink` app
    // TODO: consider using `h3`'s `handleCors(event, options)` instead
    appendCorsHeaders(event, {
        origin: ['http://localhost:4201'],
        methods: ['GET', 'OPTIONS'],
        allowHeaders: '*',
    });
    // TODO: consider using `h3`'s `getValidatedQuery(event, validateFn)` instead
    const { username } = getQuery<{ username: string }>(event);

    if (!username) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing username parameter',
        });
    }

    if (!process.env.OCTOKIT_AUTH) {
        console.warn('OCTOKIT_AUTH is not set in server-side environment.');
    }

    try {
        // TODO: is it possible to fetch this kind of data for multiple users in a single request?
        const response = await octokit.graphql<{ user: User }>(
            `query getStars($username: String!) {
              user(login: $username) {
                avatarUrl
                starredRepositories {
                  totalCount
                }
              }
            }`,
            { username },
        );
        return {
            username,
            stars: response.user.starredRepositories.totalCount,
        };
    } catch (error) {
        console.error(`Error fetching stars for ${username}:`, error);
        throw createError({
            statusCode: 500,
            statusMessage: `Failed to fetch stars for ${username}`,
        });
    }
});
