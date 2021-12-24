<template>
  <v-app>
    <AppBar />
    <v-main class="blue-grey darken-4">
      <section id="home">
        <v-row style="height: 700px" align="center" justify="center">
          <Home />
        </v-row>
      </section>
      <section id="about">
        <v-row style="height: 700px" align="center" justify="center">
          <About />
        </v-row>
      </section>
      <section id="projects">
        <v-row style="height: 700px" align="center" justify="center">
          <Projects />
        </v-row>
      </section>
      <section id="contact">
        <v-row style="height: 700px" align="center" justify="center">
          <ContactMe />
        </v-row>
      </section>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// UI Components
import AppBar from "./components/UI/AppBar.vue";
import Footer from "./components/UI/Footer.vue";
// Pages
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import ContactMe from "./views/ContactMe.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),

  components: { AppBar, About, Footer, Home, ContactMe, Projects },
};
</script>

<style scoped>
html,
body {
  font-family: "Montserrat", sans-serif;
}
</style>
