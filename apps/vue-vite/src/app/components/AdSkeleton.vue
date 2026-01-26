<template>
    <div class="tw-relative tw-mb-4 tw-h-[250px] tw-delay-0 tw-duration-500">
        <div class="tw-absolute tw-h-full tw-w-[180px]">
            <div class="tw-shadow-3 tw-overflow-hidden tw-rounded-lg tw-border tw-border-[rgba(133,214,251,0.3)]">
                <span v-for="(width, i) of itemWidths" :key="i" class="skeleton-item" :style="`width: ${width}%`" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const itemWidths = [40, 70, 50, 80, 70, 50, 80];
</script>

<style scoped lang="postcss">
    .skeleton-item {
        @apply tw-block tw-mx-2 tw-mb-2 tw-mt-3 tw-h-[20px] tw-animate-[pulse_1s_ease-in-out_infinite] tw-bg-[rgba(133,214,251,0.3)];
    }
</style>
