<template>
  <v-app>
    <v-navigation-drawer
      v-if="isMobile"
      color="nav"
      right
      v-model="drawer"
      app
      dark
    >
      <v-card color="nav" elevation="0">
        <v-card-title
          >NPRD<span style="color: rgb(121, 216, 121)"
            >PHOTO</span
          ></v-card-title
        >
      </v-card>
      <v-list color="nav" nav>
        <v-list-item
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <ResumeButton :block="true" class="mx-4" />
    </v-navigation-drawer>
    <v-app-bar app hide-on-scroll class="blue-grey darken-4" flat dark>
      <div class="text-sm-h5 font-weight-bold pointer" @click="scrollToTop">
        NPRD<span style="color: rgb(121, 216, 121)">PHOTO</span>
      </div>

      <v-spacer></v-spacer>
      <div v-if="!isMobile" class="mt-2">
        <a
          class="mx-3"
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          >{{ link.name }}</a
        >
        <ResumeButton class="mx-2" :block="false" />
      </div>

      <v-app-bar-nav-icon
        v-else
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="blue-grey darken-4">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" v-if="isMobile">
        <ContactMe />
      </section>
    </v-main>
    <Footer id="contact" v-if="!isMobile" />
    <MobileFooter v-if="isMobile" />
  </v-app>
</template>

<script>
// UI Components
// import AppBar from "./components/UI/AppBar.vue";
import Footer from "./components/UI/Footer.vue";
import ResumeButton from "./components/BaseComponent/ResumeButton.vue";
import MobileFooter from "./components/UI/MobileFooter.vue";
// Pages
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import ContactMe from "./views/ContactMe.vue";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    navLinks: [
      {
        name: "About me",
        href: "#about",
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
    scrollToTop() {
      window.scrollTo(0, 0);
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
    About,
    Footer,
    Home,
    ContactMe,
    Projects,
    ResumeButton,
    MobileFooter,
  },
};
</script>

<style scoped>
html,
body {
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
  outline: none;
  color: white !important;
}

a:hover {
  text-decoration: none;
  outline: none;
  color: #9cd779 !important;
}

.pointer {
  cursor: pointer;
}
</style>
