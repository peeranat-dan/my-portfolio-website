import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
      dark: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
        background: "#000",
        hi: "#9cd779",
      },
    },
  },
});

export default vuetify;
