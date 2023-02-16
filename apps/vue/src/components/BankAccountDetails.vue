<template>
    <div class="tw-p-3 tw-border tw-border-dashed tw-border-purple-500 tw-max-w-[600px] tw-rounded-lg">
        <h1 class="tw-text-xl tw-font-medium">Bank account details</h1>
        <dl>
            <div>
                <dt class="tw-inline-block tw-italic">IBAN:</dt>
                <dd class="tw-ml-2 tw-inline-block">
                    {{ iban }}
                    <v-btn variant="plain" icon="mdi-content-copy" size="small" />
                </dd>
            </div>
        </dl>
    </div>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker/locale/de';

    const iban = faker.finance.iban(true, 'DE');
</script>
