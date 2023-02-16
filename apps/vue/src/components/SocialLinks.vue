<template>
    <ul>
        <li v-for="link of links" :key="link.id">
            <!-- TODO: use v-icon inside anchor -->
            <a href="link.url">{{ link.label }}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">
    const links = [
        { label: 'Twitter', url: '', id: 0 },
        { label: 'Instagram', url: '', id: 1 }
    ];
</script>
