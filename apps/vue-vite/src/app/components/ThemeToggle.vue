<template>
    <v-btn @click="toggleColorMode()" icon="mdi-theme-light-dark" color="purple" aria-label="Toggle color mode" />
</template>

<script setup lang="ts">
    import { useTheme as useVuetifyTheme } from 'vuetify';
    import { useDark, useToggle } from '@vueuse/core';
    import { watchEffect } from 'vue';

    const isDark = useDark({ valueDark: 'tw-dark' }),
        toggleColorMode = useToggle(isDark),
        vuetifyTheme = useVuetifyTheme();

    watchEffect(() => {
        vuetifyTheme.change(isDark.value ? 'dark' : 'light');
    });
</script>
