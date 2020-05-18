<template>
    <dir>
        <v-snackbar
            v-model="showMessage"
            :color="color"
            bottom
            vertical="vertical"
        >
            {{ message }}
            <v-btn
                dark
                text
                @click="showMessage = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </dir>
</template>

<script>
    export default {
        name: 'FeedBack',
        data() {
            return {
                showMessage: false,
                message: '',
                color: '',
            };
        },
        watch: {
            '$store.state.message': 'setMessage',
        },
        methods: {
            setMessage() {
                this.message = this.$store.state.message.text;
                this.color = this.$store.state.message.type === 'ERROR' ? 'error' : 'success';
                this.showMessage = true;
            },
        },
    };
</script>
