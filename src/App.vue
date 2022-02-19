<template>
  <v-app>
    <v-navigation-drawer
      v-if="isMobile"
      color="chip"
      right
      v-model="drawer"
      app
      class="px-2"
    >
      <v-card
        color="chip"
        elevation="0"
        class="ml-2"
        @click="smoothScrolling('#about')"
      >
        <h2 class="mt-5 primary--text">PEERANAT</h2>
        <p>developer | photographer</p>
      </v-card>
      <v-list color="chip" nav light>
        <v-list-item
          v-for="link in navLinks"
          :key="link.name"
          @click="smoothScrolling(link.href)"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ link.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <ResumeButton :block="true" />
    </v-navigation-drawer>
    <v-app-bar
      app
      hide-on-scroll
      color="white"
      flat
      :extended="!isMobile"
      class="pt-4 pb-4"
      id="nav"
    >
      <h1
        class="ml-3 font-weight-bold pointer"
        @click="smoothScrolling('#nav')"
        v-if="!isMobile"
      >
        <span class="primary--text">Peeranat</span> Danaidusadeekul
      </h1>

      <v-spacer></v-spacer>
      <div v-if="!isMobile" class="mt-2">
        <a
          class="mx-3"
          v-for="link in navLinks"
          :key="link.name"
          @click="smoothScrolling(link.href)"
          >{{ link.name }}</a
        >
        <ResumeButton class="ml-10 mr-12" :block="false" />
      </div>

      <v-app-bar-nav-icon
        v-else
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <!-- <section id="home">
        <Home />
      </section> -->
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <!-- <section id="contact" v-if="isMobile">
        <ContactMe />
      </section> -->
      <section id="photography" class="gallery">
        <Photography />
      </section>
    </v-main>
    <Footer id="contact" />
    <!-- <MobileFooter v-if="isMobile" /> -->
  </v-app>
</template>

<script>
// UI Components
// import AppBar from "./components/UI/AppBar.vue";
import Footer from "./components/UI/Footer.vue";
import ResumeButton from "./components/BaseComponent/ResumeButton.vue";
// import MobileFooter from "./components/UI/MobileFooter.vue";
// Pages
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Photography from "./views/Photography.vue";
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
        name: "Photo",
        href: "#photography",
        icon: "mdi-image-multiple-outline",
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
    About,
    Footer,
    // Home,
    Skills,
    Projects,
    ResumeButton,
    // MobileFooter,
    Photography,
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

a:hover {
  text-decoration: none;
  outline: none;
  color: #8ca988 !important;
}

.pointer {
  cursor: pointer;
}
</style>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  color: black !important;
}

a:hover {
  text-decoration: none;
  outline: none;
  color: #8ca988 !important;
}
</style>
