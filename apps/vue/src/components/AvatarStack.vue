<!-- for more inspiration, see also `AvatarStack` component in `primer/react` repo -->
<template>
    <ul>
        <v-avatar tag="li" v-for="person of persons" :key="person.id"
                  :image="person.url" size="x-large"
                  class="-tw-mr-4 tw-outline tw-outline-white"
        />
    </ul>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';

    const persons = [...new Array(6)].map((_, i) => {
        return { id: i, url: faker.image.avatar() };
    });
</script>
