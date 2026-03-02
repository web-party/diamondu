<template>
    <div class="relative mb-4 h-[250px] duration-500">
        <div class="absolute h-full w-45">
            <div class="shadow-3 overflow-hidden rounded-lg border border-sky-300/30">
                <span v-for="(width, i) of itemWidths" :key="i" :style="`width: ${width}%`"
                      class="block mx-2 mb-2 mt-3 h-5 animate-[pulse_1s_ease-in-out_infinite] bg-sky-300/30"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const itemWidths = [40, 70, 50, 80, 70, 50, 80];
</script>
