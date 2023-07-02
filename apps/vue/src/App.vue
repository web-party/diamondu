<template>
    <main class="tw-grid tw-gap-4 tw-grid-cols-1 md:tw-grid-cols-2">
        <div>
            <AvatarStack/>
            <Countdown class="tw-block tw-m-4"/>
            <BankAccountDetails/>
            <CollectionLayoutSwitch class="tw-mt-4"/>
        </div>
    </main>
</template>

<script lang="ts" setup>
    import BankAccountDetails from './components/BankAccountDetails.vue';
    import AvatarStack from './components/AvatarStack.vue';
    import Countdown from './components/Countdown.vue';
    import CollectionLayoutSwitch from './components/CollectionLayoutSwitch.vue';
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
