<template>
    <section class="tw-p-3 tw-border tw-border-dashed tw-border-purple-500 tw-max-w-lg tw-rounded-lg" aria-labelledby="bank-account-details">
        <h1 id="bank-account-details" class="tw-text-amber-600 dark:tw-text-amber-300 tw-text-xl tw-font-semibold">Bank account details</h1>
        <dl>
            <div class="tw-space-x-2">
                <dt class="tw-inline-block tw-italic">IBAN:</dt>
                <dd class="tw-inline-block">
                    {{ iban }}
                    <v-btn @click="copy(iban)" variant="plain" :icon="iconId" size="small" :disabled="copied" color="purple" />
                </dd>
            </div>
        </dl>
    </section>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';
    import { useClipboard } from '@vueuse/core';
    import { computed } from 'vue';

    const iban = faker.finance.iban(true, 'DE'),
        { copy, copied } = useClipboard({ copiedDuring: 2000 }),
        iconId = computed(() => `mdi-${copied.value ? 'check' : 'content-copy'}`);
</script>
