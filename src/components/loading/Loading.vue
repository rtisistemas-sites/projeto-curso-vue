<template>
    <div>
        <div
            v-if="condition"
            class="text-center"
        >
            <v-progress-circular
                class="pt-8"
                indeterminate
                color="primary"
            />
        </div>
        <div v-else>
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            condition: { type: Boolean, required: true },
        },
    };
</script>
