<template>
    <!-- :key is important here as it ensures to replace the whole element every second for animation purposes -->
    <time :key="displayedRemainingTime" :datetime="domRemainingTime" aria-label="Remaining time" class="tw-px-2 tw-rounded tw-text-3xl tw-w-min" :class="{ ping: !finished }">
        {{ displayedRemainingTime }}
    </time>
</template>

<script setup lang="ts">
    import { format, parse, subSeconds } from 'date-fns';
    import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

    const props = withDefaults(defineProps<{ startAt?: string }>(), { startAt: '00:10' });
    // TODO: consider using `dayjs` for better duration support
    const remainingTime = ref(parse(props.startAt, 'mm:ss', Date.now()));
    const displayedRemainingTime = computed(() => format(remainingTime.value, 'mm:ss'));
    const domRemainingTime = computed(() => 'PT' + displayedRemainingTime.value.replace(':', 'M'));
    // TODO: implement aria-live functionality by announcing e.g. every 5 seconds and when finished
    const finished = computed(() => displayedRemainingTime.value === '00:00');
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
