<template>
    <v-app class="p-4">
        <v-main>
            <slot name="story" />
        </v-main>
    </v-app>
</template>

<script setup>
    import '../src/tw.css';
</script>
