<template>
    <!-- :key is important here as it ensures to replace the whole element every second for animation purposes -->
    <time :key="displayedRemainingTime" :datetime="domRemainingTime" aria-label="Remaining time" class="tw-px-2 tw-rounded tw-text-3xl tw-w-min" :class="{ ping: !finished }">
        {{ displayedRemainingTime }}
    </time>
</template>

<script setup lang="ts">
    import { format, parse, subSeconds } from 'date-fns';
    import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
    // import { useCountdown } from '@vueuse/core';

    // TODO: implement aria-live functionality by announcing e.g. every 5 seconds and when finished
    // TODO: consider using `dayjs` for better duration support

    const { startAt = '00:10' } = defineProps<{ startAt?: string }>(),
        initialRemainingTime = parse(startAt, 'mm:ss', Date.now()),
        remainingTime = ref(initialRemainingTime),
        displayedRemainingTime = computed(() => format(remainingTime.value, 'mm:ss')),
        domRemainingTime = computed(() => 'PT' + displayedRemainingTime.value.replace(':', 'M')),
        finished = computed(() => displayedRemainingTime.value === '00:00');
    let intervalId: ReturnType<typeof setInterval>;

    onMounted(() => {
        intervalId = setInterval(() => {
            remainingTime.value = subSeconds(remainingTime.value, 1);
        }, 1000);
    });

    onUnmounted(() => { !finished.value && clearInterval(intervalId); });

    watch(finished, newVal => { newVal && clearInterval(intervalId); });
</script>

<style scoped>
    @keyframes ping {
        75%, 100% {
            transform: scale(1.1);
            opacity: 0;
        }
    }

    .ping {
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1);
    }
</style>
