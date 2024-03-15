<template>
    <v-btn-toggle rounded="0" mandatory v-model="layout" variant="outlined">
        <v-btn rounded="0" :value="CollectionLayout.grid" icon="mdi-view-grid" aria-label="Grid" />
        <v-btn rounded="0" :value="CollectionLayout.list" icon="mdi-view-list" aria-label="List" />
    </v-btn-toggle>
</template>

<script lang="ts">
    export enum CollectionLayout { grid, list }
</script>

<script lang="ts" setup>
    import { ref } from 'vue';

    const layout = ref(CollectionLayout.grid);
    defineExpose({ layout });
</script>
