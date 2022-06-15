<template>
  <v-app>
    <AppBar />
    <v-main>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </v-main>
    <Footer id="contact" />
  </v-app>
</template>

<script>
// UI Components
import AppBar from "./components/UI/AppBar.vue";
import Footer from "./components/UI/Footer.vue";
// Pages
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Skills from "./views/Skills.vue";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    navLinks: [
      {
        name: "Home",
        href: "#about",
        icon: "mdi-information-outline",
      },
      {
        name: "Skills",
        href: "#skills",
        icon: "mdi-information-outline",
      },
      {
        name: "Project",
        href: "#projects",
        icon: "mdi-file-document-outline",
      },
      {
        name: "Contact me",
        href: "#contact",
        icon: "mdi-phone-outline",
      },
    ],
  }),
  methods: {
    smoothScrolling(link) {
      this.$vuetify.goTo(link, {
        duration: 700,
        offset: 0,
        easing: "easeInOutCubic",
      });
      if (this.isMobile) {
        this.drawer = !this.drawer;
      }
    },
  },
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "md"
      );
    },
  },
  components: {
    AppBar,
    Footer,
    About,
    Skills,
    Projects,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

html,
body {
  font-family: "Manrope", sans-serif;
}

#app {
  font-family: "Manrope", sans-serif;
}

.pointer {
  cursor: pointer;
}

::selection {
  background: #45634a;
  color: white;
}
</style>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  color: black !important;
  transition: 0.3s;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

a:hover {
  text-decoration: none;
  outline: none;
  color: #8ca988 !important;
}

.navbar-title {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
