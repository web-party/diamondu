<template>
    <ul aria-label="Social links" class="tw-flex tw-space-x-2">
        <li v-for="link of links" :key="link.id" class="tw-opacity-50 hover:tw-opacity-100">
            <a :href="link.url" :aria-label="link.label" class="tw-inline-block">
                <!-- TODO: mdi social icons are deprecated, switch to a different (social) icon set instead  -->
                <v-icon :icon="`mdi-${link.mdi}`" size="large" />
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
    const links = [
        { label: 'Twitter', url: '#', id: 0, mdi: 'twitter' },
        { label: 'Instagram', url: '#', id: 1, mdi: 'instagram' },
        { label: 'Facebook', url: '#', id: 2, mdi: 'facebook' },
        { label: 'YouTube', url: '#', id: 3, mdi: 'youtube' },
    ];
</script>
