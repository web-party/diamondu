<template>
    <AvatarStack />
    <Countdown class="tw-block tw-m-3" />
    <BankAccountDetails />
    <Product />
</template>

<script lang="ts" setup>
    import BankAccountDetails from './components/BankAccountDetails.vue';
    import Product from './components/Product.vue';
    import AvatarStack from './components/AvatarStack.vue';
    import Countdown from './components/Countdown.vue';
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
