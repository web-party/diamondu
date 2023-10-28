<template>
    <time datetime="PT20M00S" aria-label="Remaining time" class="tw-px-2 tw-rounded tw-text-3xl tw-w-min" :class="{ ping: !finished }">
        {{ displayedRemainingTime }}
    </time>
</template>

<script setup lang="ts">
    import { format, parse, subSeconds } from 'date-fns';
    import { ref } from 'vue';

    const props = defineProps({ startAt: { type: String, default: '00:10' }});

    const displayedRemainingTime = ref(props.startAt);
    const finished = ref(false);
    // const remainingTime = ref('PT' + props.startAt.replace(':', 'M'));
    const intervalId = setInterval(() => {
        // TODO: consider using `dayjs` for better duration support
        const parsed = parse(displayedRemainingTime.value, 'mm:ss', Date.now());
        displayedRemainingTime.value = format(subSeconds(parsed, 1), 'mm:ss');
        if (displayedRemainingTime.value === '00:00') {
            finished.value = true;
            clearInterval(intervalId);
        }
    }, 1000);
</script>

<style scoped>
    @keyframes ping {
        75%, 100% {
            transform: scale(1.1);
            opacity: 0;
        }
    }

    .ping {
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
</style>
