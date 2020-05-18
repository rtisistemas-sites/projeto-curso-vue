import apiInstance from './apiInstance';

export default {
    name: 'apiConfig',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use((config) => {
                const newconfig = config;

                if (newconfig.url.indexOf('?') !== -1) newconfig.url += '&';
                else newconfig.url += '?';

                newconfig.url += `key=${this.$store.state.authToken}`;
                return newconfig;
            }, () => {
                this.$store.commit('showErrorMessage', 'Ops! houve um problema ao enviar requisição');
            });

            apiInstance.interceptors.response.use((response) => response, () => {
                this.$store.commit('showErrorMessage', 'Ops! houve um problema com sua requisição');
            });
        },
    },
};
