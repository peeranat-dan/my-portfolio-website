<template>
  <div>
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
        class="ml-6 font-weight-bold pointer navbar-title"
        @click="smoothScrolling('#nav')"
        v-if="!isMobile"
      >
        <span class="primary--text">P</span>D
      </h1>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div v-if="!isMobile">
        <a
          class="mx-3 mt-1"
          v-for="link in navLinks"
          :key="link.name"
          @click="smoothScrolling(link.href)"
          >{{ link.name }}</a
        >
      </div>
      <v-spacer />
      <ResumeButton v-if="!isMobile" class="mr-10" :block="false" />

      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
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
  </div>
</template>

<script>
import ResumeButton from "../BaseComponent/ResumeButton.vue";
export default {
  data() {
    return {
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
      resumeUrl:
        "https://drive.google.com/file/d/1zaljVBAhkWv1Usiyb8wQop_dwjJshDST/view?usp=sharing",
    };
  },
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
    ResumeButton,
  },
};
</script>

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
</style>
