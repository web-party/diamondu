<template>
    <v-btn-toggle rounded="0" mandatory v-model="layout" variant="outlined">
        <v-btn rounded="0" :value="CollectionLayout.grid" icon="mdi-view-grid" aria-label="Grid" />
        <v-btn rounded="0" :value="CollectionLayout.list" icon="mdi-view-list" aria-label="List" />
    </v-btn-toggle>
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue';

    enum CollectionLayout { grid, list }
    const emit = defineEmits<{(event: 'view', val: CollectionLayout): void}>();

    const layout = ref<CollectionLayout>(CollectionLayout.grid);
    watch(layout, newVal => { emit('view', newVal); });
</script>
