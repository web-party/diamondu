<template>
    <div class="w-60 h-80 rounded-lg border border-sky-300/30">
        <!-- :class="`w-[${width}%]`" wouldn't work because tw wouldn't see this dynamics -->
        <span v-for="(width, i) of itemWidths" :key="i" :style="`width: ${width}%`"
              class="block mx-2 mb-2 mt-3 h-5 motion-safe:animate-[pulse_1s_ease-in-out_infinite] bg-sky-300/30"
        />
    </div>
</template>

<script setup lang="ts">
    const itemWidths = [40, 70, 50, 80, 70, 50, 80];
</script>
