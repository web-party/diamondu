<!-- for more inspiration, see also `AvatarStack` component in `primer/react` repo -->
<template>
    <ul aria-label="Avatar stack">
        <v-avatar tag="li" v-for="person of persons" :key="person.id"
                  :image="person.url" size="x-large" variant="outlined"
                  class="-mr-4 border-4! bg-white! hover:scale-125 transition-transform!"
        />
    </ul>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';

    const persons = [...new Array(6)].map(() => {
        return { id: Symbol(), url: faker.image.avatar() };
    });
</script>
