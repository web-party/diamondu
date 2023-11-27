<template>
    <!-- TODO: resolve duplications -->
    <div class="tw-relative tw-mb-4 tw-hidden tw-h-[250px] tw-delay-0 tw-duration-500 tw-xl:block">
        <div class="tw-absolute tw-h-full tw-w-[180px]">
            <div class="tw-shadow-3 tw-overflow-hidden tw-rounded-lg tw-border tw-border-[rgba(133,214,251,0.3)]">
                <!-- TODO: convert to a loop -->
                <span class="skeleton-item tw-w-[40%]"></span>
                <span class="skeleton-item tw-w-[70%]"></span>
                <span class="skeleton-item tw-w-[50%]"></span>
                <span class="skeleton-item tw-w-[80%]"></span>
                <span class="skeleton-item tw-w-[70%]"></span>
                <span class="skeleton-item tw-w-[50%]"></span>
                <span class="skeleton-item tw-w-[80%]"></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
    .skeleton-item {
        @apply tw-mx-2 tw-mb-2 tw-mt-3 tw-inline-block tw-h-[20px] tw-w-[40%] tw-animate-[pulse_1s_ease-in-out_infinite] tw-bg-[rgba(133,214,251,0.3)];
    }
</style>
