<!-- for more inspiration, see also `AvatarStack` component in `primer/react` repo -->
<template>
    <ul aria-label="Avatar stack">
        <v-avatar tag="li" v-for="person of persons" :key="person.id"
                  :image="person.url" size="x-large" variant="outlined"
                  class="-tw-mr-4 !tw-border-4 !tw-bg-white hover:tw-scale-125 !tw-transition-transform"
        />
    </ul>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';

    const persons = [...new Array(6)].map(() => {
        return { id: Symbol(), url: faker.image.avatar() };
    });
</script>
