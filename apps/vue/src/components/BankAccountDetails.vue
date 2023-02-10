<template>
    <div class="p-3 border border-dashed border-purple-500 max-w-[600px] rounded-lg">
        <h1 class="text-xl font-medium">Bank account details</h1>
        <dl>
            <div>
                <dt class="inline-block italic">IBAN:</dt>
                <dd class="ml-2 inline-block">{{ iban }}</dd>
            </div>
        </dl>
    </div>
</template>

<script setup lang="ts">
    import { faker } from '@faker-js/faker';

    const iban = faker.finance.iban(true, 'DE');
</script>

<style scoped></style>
