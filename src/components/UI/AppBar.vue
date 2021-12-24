<template>
  <v-app-bar hide-on-scroll class="blue-grey darken-4" app flat dark>
    <div class="text-sm-h5 font-weight-bold" @click="scrollToTop">
      NPRDPHOTO
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
    </div>
    <v-app-bar-nav-icon class="mr-3" v-else></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { name: "about me", href: "#about" },
        { name: "projects", href: "#projects" },
        { name: "contact me", href: "#contact" },
      ],
    };
  },
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
};
</script>

<style scoped>
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
