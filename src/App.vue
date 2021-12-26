<template>
  <v-app>
    <v-navigation-drawer v-if="isMobile" color="nav" right v-model="drawer" app dark>
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
    </v-navigation-drawer>
    <v-app-bar app hide-on-scroll class="blue-grey darken-4" flat dark>
      <div class="text-sm-h5 font-weight-bold" @click="scrollToTop">
        NPRD<span style="color: rgb(121, 216, 121)">PHOTO</span>
      </div>

      <v-spacer></v-spacer>
      <div v-if="!isMobile">
        <a
          class="mx-2"
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          >{{ link.name }}</a
        >
        <v-btn
          outlined
          class="mx-2 text-lowercase"
          color="hi"
          :href="resumeUrl"
        >
          <v-icon class="mr-2">mdi-google-drive</v-icon>Get my resume!
        </v-btn>
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
      <section id="contact">
        <ContactMe />
      </section>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// UI Components
// import AppBar from "./components/UI/AppBar.vue";
import Footer from "./components/UI/Footer.vue";
// Pages
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import ContactMe from "./views/ContactMe.vue";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    navLinks: [
      { name: "about me", href: "#about", icon: "mdi-information-outline" },
      {
        name: "projects",
        href: "#projects",
        icon: "mdi-file-document-outline",
      },
      { name: "contact me", href: "#contact", icon: "mdi-phone-outline" },
    ],
    resumeUrl:
      "https://drive.google.com/file/d/1zaljVBAhkWv1Usiyb8wQop_dwjJshDST/view?usp=sharing",
  }),
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    logFunc(name) {
      console.log(name);
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
  components: { About, Footer, Home, ContactMe, Projects },
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
</style>
