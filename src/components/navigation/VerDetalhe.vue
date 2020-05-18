<template>
    <div>
        <v-btn
            text
            small
            color="primary"
            @click="goToDetails"
        >
            Ver Detalhe
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'VerDetalhe',
        props: {
            url: { type: String, required: true },
        },
        methods: {
            goToDetails() {
                this.$router.push(this.url);
            },
        },
    };
</script>
