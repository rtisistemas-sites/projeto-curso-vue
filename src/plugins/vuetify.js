import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.green.darken1, // #E53935
                secondary: colors.amber.darken3, // #FFCDD2
                accent: colors.lime.accent3,
            },
            dark: {
                primary: colors.green.darken1, // #E53935
                secondary: colors.amber.darken3, // #FFCDD2
                accent: colors.lime.accent3,
            },
        },
    },
});
