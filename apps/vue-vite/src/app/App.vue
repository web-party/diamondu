<template>
    <main class="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <section class="lg:col-span-1 space-y-5">
            <AvatarStack />
            <Countdown class="block" />
            <BankAccountDetails />
            <SocialLinks />
            <ThemeToggle />
        </section>
        <section class="lg:col-span-2 space-y-4">
            <CollectionLayoutSwitch ref="layoutRef" />
            <ProductCollection
                :layout="layoutRef?.layout || CollectionLayout.grid"
            />
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

    const layoutRef = ref<InstanceType<typeof CollectionLayoutSwitch> | null>();
</script>
