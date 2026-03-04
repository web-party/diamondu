<template>
    <section class="p-3 border border-dashed border-purple-500 max-w-lg rounded-lg" aria-labelledby="bank-account-details">
        <h1 id="bank-account-details" class="text-amber-600 dark:text-amber-300 text-xl font-semibold">Bank account details</h1>
        <dl>
            <div class="space-x-2">
                <dt class="inline-block italic">IBAN:</dt>
                <dd class="inline-block">
                    {{ iban }}
                    <v-btn @click="copyIban" icon variant="plain" size="small" :disabled="copied" color="purple">
                        <v-icon :icon="iconId" />
                        <v-tooltip v-model="tooltipActive" activator="parent">Copy to clipboard</v-tooltip>
                    </v-btn>
                </dd>
            </div>
        </dl>
        <v-slide-y-transition>
            <v-textarea v-if="text" clearable label="Paste your clipboard contents here" rows="2" />
        </v-slide-y-transition>
    </section>
</template>

<script setup lang="ts">
    import { fakerDE as faker } from '@faker-js/faker';
    import { useClipboard } from '@vueuse/core';
    import { computed, ref } from 'vue';

    const iban = faker.finance.iban({ formatted: true, countryCode: 'DE' }),
        { copy, copied, text } = useClipboard({ copiedDuring: 2000 }),
        iconId = computed(() => `mdi-${copied.value ? 'check' : 'content-copy'}`),
        tooltipActive = ref(false);

    function copyIban() {
        copy(iban);
        tooltipActive.value = false;
    }
</script>
