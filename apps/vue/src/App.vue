<template>
    <main class="tw-grid tw-gap-4 tw-grid-cols-1 lg:tw-grid-cols-3">
        <section class="lg:tw-col-span-1 tw-space-y-4">
            <AvatarStack />
            <Countdown class="tw-block" />
            <BankAccountDetails />
            <SocialLinks />
        </section>
        <section class="lg:tw-col-span-2 tw-space-y-4">
            <CollectionLayoutSwitch />
            <ProductCollection />
        </section>
    </main>
</template>

<script lang="ts" setup>
    import BankAccountDetails from './components/BankAccountDetails.vue';
    import AvatarStack from './components/AvatarStack.vue';
    import Countdown from './components/Countdown.vue';
    import CollectionLayoutSwitch from './components/CollectionLayoutSwitch.vue';
    import ProductCollection from './components/ProductCollection.vue';
    import SocialLinks from './components/SocialLinks.vue';
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
