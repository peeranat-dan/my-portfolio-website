import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    light: true,
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#45634A",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
        background: "#000",
        button: "5F937A",
        hi: "#9cd779",
        nav: "#1B272D",
        suplimentary: "#894A47",
        chip: "#F2ECE2",
        linkOnCard: "#FFDE82",
        mobileNav: "#bfceb2",
        gallery: "#e5e7d4",
      },
    },
  },
});

export default vuetify;
