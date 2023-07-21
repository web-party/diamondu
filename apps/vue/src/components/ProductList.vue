<template>
    <ul class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
        <li v-for="product of products" :key="product.id">
            <v-skeleton-loader :loading="loading" type="card">
                <v-card>
                    <v-img :src="product.imageUrl" :cover="true" />
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-text>{{ product.description }}</v-card-text>
                </v-card>
            </v-skeleton-loader>
        </li>
    </ul>
</template>

<script lang="ts" setup>
    import { faker } from '@faker-js/faker/locale/de';
    import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
    import { ref } from 'vue';

    type Product = {
        id: number;
        name: string;
        imageUrl: string;
        description: string;
    };

    const loading = ref(true);

    setTimeout(() => { loading.value = false }, 1000);

    const products = ref([...new Array(12)].map<Product>((_, i) => {
        return {
            id: i,
            name: faker.commerce.product(),
            imageUrl: faker.image.urlLoremFlickr({ category: 'tech' }),
            description: faker.commerce.productDescription()
        };
    }));

</script>
