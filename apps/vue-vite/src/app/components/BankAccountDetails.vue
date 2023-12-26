<template>
    <section class="tw-p-3 tw-border tw-border-dashed tw-border-purple-500 tw-max-w-lg tw-rounded-lg" aria-labelledby="bank-account-details">
        <h1 id="bank-account-details" class="tw-text-amber-600 dark:tw-text-amber-300 tw-text-xl tw-font-semibold">Bank account details</h1>
        <dl>
            <div class="tw-space-x-2">
                <dt class="tw-inline-block tw-italic">IBAN:</dt>
                <dd class="tw-inline-block">
                    {{ iban }}
                    <v-btn @click="copyIban" icon variant="plain" size="small" :disabled="copied" color="purple">
                        <v-icon :icon="iconId" />
                        <v-tooltip v-model="tooltipActive" activator="parent">Copy to clipboard</v-tooltip>
                    </v-btn>
                </dd>
            </div>
        </dl>
        <v-slide-y-transition>
            <v-textarea v-if="text || copied" clearable label="Paste your clipboard contents here" rows="2" />
        </v-slide-y-transition>
    </section>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';
    import { useClipboard } from '@vueuse/core';
    import { computed, ref } from 'vue';

    const iban = faker.finance.iban(true, 'DE'),
        { copy, copied, text } = useClipboard({ copiedDuring: 2000 }),
        iconId = computed(() => `mdi-${copied.value ? 'check' : 'content-copy'}`),
        tooltipActive = ref(false);

    function copyIban() {
        copy(iban);
        tooltipActive.value = false;
    }
</script>
