<!-- for more inspiration, see also `AvatarStack` component in `primer/react` repo -->
<template>
    <ul>
        <li v-for="person of persons" :key="person.id" class="tw-inline-block -tw-mr-6">
            <!-- TODO: use v-avatar instead of img? -->
            <img alt="" :src="person.url" class="tw-rounded-full tw-border tw-border-white">
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';

    const persons = [...new Array(6)].map((_, i) => {
        return { id: i, url: faker.image.avatar() };
    });
</script>
