<template>
    <main class="tw-grid tw-gap-4 tw-grid-cols-1 lg:tw-grid-cols-3">
        <section class="lg:tw-col-span-1 tw-space-y-5">
            <AvatarStack />
            <Countdown class="tw-block" />
            <BankAccountDetails />
            <SocialLinks />
            <ThemeToggle />
        </section>
        <section class="lg:tw-col-span-2 tw-space-y-4">
            <CollectionLayoutSwitch @switch-layout="switchLayout" />
            <ProductCollection :layout="layout" />
        </section>
    </main>
</template>

<script lang="ts" setup>
import BankAccountDetails from './components/BankAccountDetails.vue';
import AvatarStack from './components/AvatarStack.vue';
import Countdown from './components/Countdown.vue';
import CollectionLayoutSwitch, { CollectionLayout } from './components/CollectionLayoutSwitch.vue';
import ProductCollection from './components/ProductCollection.vue';
import SocialLinks from './components/SocialLinks.vue';
import ThemeToggle from './components/ThemeToggle.vue';
import { ref } from 'vue';

let layout = ref(CollectionLayout.grid);

function switchLayout(val: CollectionLayout) {
    layout.value = val;
}
</script>
