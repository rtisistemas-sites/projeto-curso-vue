<template>
    <v-app>
        <AppHeader />
        <v-content>
            <router-view />
        </v-content>
        <FeedBack />
    </v-app>
</template>

<script>
    import apiConfig from './components/api/apiConfig';
    import FeedBack from './components/feedBack/FeedBack.vue';
    import AppHeader from './components/header/AppHeader.vue';

    export default {
        name: 'App',
        components: {
            FeedBack,
            AppHeader,
        },
        mixins: [apiConfig],
        created() {
            this.createInterceptors();

            if (window.localStorage.authToken && window.localStorage.userId) {
                this.$store.commit('setAuthToken', window.localStorage.authToken);
                this.$store.commit('setUserId', window.localStorage.userId);
            } else {
                this.$router.push('/');
            }
        },
    };
</script>
