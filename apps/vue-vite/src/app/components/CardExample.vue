<template>
    <v-card :loading="reserving" class="!tw-rounded-xl" max-width="374">
        <template #loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate />
        </template>

        <v-img cover class="tw-grayscale hover:tw-grayscale-0" height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />

        <v-card-item>
            <v-card-title class="animate-focus-in-out">{{ productName }}</v-card-title>

            <v-card-subtitle>
                <span class="me-1">Local Favorite</span>
                <v-icon color="error" icon="mdi-fire-circle" size="small" />
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating
                    :model-value="4.5"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                />

                <div class="text-grey ms-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1" />

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
            <v-chip-group v-model="selection">
                <v-chip>5:30PM</v-chip>
                <v-chip>7:30PM</v-chip>
                <v-chip>8:00PM</v-chip>
                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </div>

        <v-card-actions>
            <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">Reserve</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
    import { onUnmounted, ref } from 'vue';
    import { faker } from '@faker-js/faker/locale/de';

    const reserving = ref(false);
    const selection = ref(1);
    const productName = ref(faker.commerce.product());

    const intervalId = setInterval(() => { productName.value = faker.commerce.product(); }, 2_000)

    function reserve() {
        reserving.value = true;

        setTimeout(() => { reserving.value = false; }, 2_000);
    }

    onUnmounted(() => { clearInterval(intervalId); });
</script>

<style scoped>
    .animate-focus-in-out {
        animation: focus-in-out 1s linear infinite alternate both;
    }

    @keyframes focus-in-out {
        from {
            filter: blur(5px);
            opacity: 0;
        }

        50%, to {
            filter: blur(0px);
            opacity: 1;
        }
    }
</style>
