<template>
  <v-app-bar hide-on-scroll class="blue-grey darken-4" app flat dark>
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
      <v-btn outlined class="mx-2 text-lowercase" color="hi" :href="resumeUrl">
        <v-icon class="mr-2">mdi-google-drive</v-icon>Get my resume!
      </v-btn>
    </div>

    <v-btn icon @click.stop="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer right v-model="drawer" app class="blue darken-5">
      <v-list>
        <v-list-item v-for="link in navLinks" :key="link.name">
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
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
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
