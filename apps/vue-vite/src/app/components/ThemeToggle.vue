<template>
    <v-btn @click="toggleColorMode()" icon="mdi-theme-light-dark" color="purple" aria-label="Toggle color mode" />
</template>

<script setup>
    import { useTheme as useVuetifyTheme } from 'vuetify';
    import { useDark, useToggle } from '@vueuse/core';
    import { watch } from 'vue';

    const isDark = useDark({ valueDark: 'tw-dark' }),
        toggleColorMode = useToggle(isDark),
        vuetifyTheme = useVuetifyTheme(),
        { name: vuetifyThemeName } = vuetifyTheme.global;

    watch(isDark, isDark => { vuetifyThemeName.value = isDark ? 'dark' : 'light' }, { immediate: true });
</script>
