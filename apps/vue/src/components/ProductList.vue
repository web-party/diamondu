<template>
    <ul class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-2">
        <li v-for="product of products" :key="product.id">
            <v-skeleton-loader :loading="true" type="card">
                <v-card></v-card>
            </v-skeleton-loader>
        </li>
    </ul>
</template>

<script lang="ts" setup>
    // import Product from '../App.vue';
    import { faker } from '@faker-js/faker/locale/de';
    import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

    type Product = {
        id: number;
        name: string;
        imageUrl: string;
        description: string;
    };

    const products = [...new Array(12)].map<Product>((_, i) => {
        return {
            id: i,
            name: faker.commerce.product(),
            imageUrl: faker.image.urlLoremFlickr({ category: 'tech' }),
            description: faker.commerce.productDescription()
        };
    });

</script>
