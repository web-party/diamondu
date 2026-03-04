import { defineEventHandler, getQuery, createError, setResponseHeader } from 'h3';
import { Octokit } from 'octokit';

// Nitro automatically picks up environment variables from .env during development
const octokit = new Octokit({
    auth: process.env['OCTOKIT_AUTH'],
});

export default defineEventHandler(async (event) => {
    // Enable CORS for the Angular app
    setResponseHeader(event, 'Access-Control-Allow-Origin', 'http://localhost:4201');
    setResponseHeader(event, 'Access-Control-Allow-Methods', 'GET, OPTIONS');
    setResponseHeader(event, 'Access-Control-Allow-Headers', '*');

    const q = getQuery<{ username: string }>(event);
    const username = q.username;

    if (!username) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing username parameter',
        });
    }

    if (!process.env['OCTOKIT_AUTH']) {
        console.warn('OCTOKIT_AUTH is not set in server-side environment.');
    }

    try {
        const response = await octokit.graphql<{ user: { starredRepositories: { totalCount: number } } }>(
            `query($login: String!) {
              user(login: $login) {
                starredRepositories {
                  totalCount
                }
              }
            }`,
            { login: username },
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
