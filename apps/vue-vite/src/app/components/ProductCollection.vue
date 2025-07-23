<template>
    <ul v-if="props.layout === CollectionLayout.grid" class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
        <template v-if="loading">
            <li v-for="item in 5" :key="item">
                <v-skeleton-loader type="card, paragraph" class="tw-h-full" />
            </li>
        </template>
        <template v-else>
            <v-card v-for="product of products" :key="product.id" tag="li" class="tw-h-full tw-relative">
                <v-btn @click="product.liked = !product.liked" density="comfortable" color="purple" variant="text" :icon="product.liked ? 'mdi-heart' : 'mdi-heart-outline'" size="large" class="!tw-absolute tw-top-1 tw-right-1 tw-z-10" />
                <v-img :src="product.imageUrl" height="200" cover class="tw-opacity-60 tw-blur-[1px] hover:tw-opacity-100 hover:tw-blur-0" />
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-text>{{ product.description }}</v-card-text>
            </v-card>
        </template>
    </ul>
    <ul v-else>
        <li v-for="item in 5" :key="item">
            <v-skeleton-loader boilerplate type="list-item-avatar-three-line" class="tw-h-full" />
        </li>
    </ul>
</template>

<script lang="ts" setup>
    import { faker } from '@faker-js/faker/locale/de';
    import { ref } from 'vue';
    import { CollectionLayout } from './CollectionLayoutSwitch.vue';

    const props = defineProps<{ layout: CollectionLayout }>();

    type Product = {
        id: number,
        name: string,
        imageUrl: string,
        description: string,
        originalPrice?: number,
        discountPrice?: number,
        liked?: boolean
    };

    const loading = ref(true);

    setTimeout(() => { loading.value = false }, 2_000);

    const products = ref([...new Array(12)].map<Product>((_, i) => {
        return {
            id: i,
            name: faker.commerce.product(),
            // imageUrl: faker.image.urlLoremFlickr({ category: 'computer' }),
            imageUrl: faker.image.urlPicsumPhotos({ height: 200 }),
            description: faker.commerce.productDescription()
        };
    }));

</script>
