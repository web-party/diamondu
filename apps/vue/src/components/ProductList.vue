<template>
    <ul>
        <li v-for="product of products"></li>
    </ul>
</template>

<script lang="ts" setup>
    import Product from '../App.vue';

    const products = [];
</script>
