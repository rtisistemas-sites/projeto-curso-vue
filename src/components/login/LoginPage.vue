<template>
    <div>
        <v-container fluid>
            <v-card
                shaped
                elevation="6"
                class="pa-2"
            >
                <v-row justify="center">
                    <v-col
                        cols="12"
                        md="4"
                        sm="4"
                        class="text-center"
                        lg="3"
                    >
                        <h5 class="headline display-1 text-uppercase">Login</h5>

                        <v-text-field
                            v-model="userId"
                            label="ID do usuário"
                        />

                        <v-text-field
                            v-model="token"
                            label="Token"
                        />

                        <v-btn
                            depressed
                            color="primary"
                            dark
                            block
                            class="mb-2"
                            @click="login"
                        >
                            Login
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="loginAsGuest"
                        >
                            Entrar como visitante
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                userId: '113443181006867901242',
                token: 'AIzaSyDhH6s4OiH7ZNhX0taRQSdH4Kt-mMjaZsk',
            };
        },
        methods: {
            login() {
                if (this.token && this.userId) {
                    this.$store.commit('setAuthToken', this.token);
                    this.$store.commit('setUserId', this.userId);
                    this.$router.push('/book');
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve informar um ID e token.');
                }
            },
            loginAsGuest() {
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            },
        },
    };
</script>
