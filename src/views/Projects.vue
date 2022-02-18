<template>
  <v-container
    class="px-5"
    :style="isMobile ? '' : 'height: 720px'"
    fill-height
    align="center"
    justify="center"
  >
    <v-row>
      <v-col cols="12">
        <h2 class="text--secondary font-weight-regular">Projects</h2>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        v-for="project in projects"
        :key="project.name"
      >
        <v-card color="primary" height="250" :light="!project.dark">
          <v-card-title class="white--text">
            {{ project.name }}
          </v-card-title>
          <v-card-text class="chip--text">
            {{ project.description }}
          </v-card-text>
          <div class="ml-3">
            <v-chip
              class="mx-1 mb-1"
              color="#FFFBCE"
              outlined
              v-for="tag in project.tags"
              :key="tag"
              >{{ tag }}</v-chip
            >
          </div>
          <v-card-text class="chip--text" v-if="project.channel">
            Visit
            <v-icon class="mx-1 mb-1" color="chip">{{ project.icon }}</v-icon>
            <a :href="project.url">
              <strong>{{ project.channel }}</strong>
            </a>
            <v-icon class="ml-2" x-small color="chip">mdi-open-in-new</v-icon>
          </v-card-text>
          <v-card-text class="chip--text" v-else>
            * No project repository due to confidential *
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Telecare",
          color: "#244b5c",
          dark: false,

          icon: "mdi-circle-multiple",
          tags: ["NuxtJS", "NodeJS", "Firebase"],
          description:
            "Designed and developed a mini telemedicine front-end and back-end system for True Digital Health.",
        },
        {
          name: "Portfolio website",
          color: "#244b5c",
          dark: false,
          channel: "Github",
          icon: "mdi-github",
          url: "https://github.com/peeranat-dan/my-portfolio-website.git",
          tags: ["Vue 2", "Vuetify"],
          description:
            "Built own webpage to show my front-end developer skill and my personality.",
        },
        {
          name: "Pomo-Pomo (In-Dev)",
          color: "#244b5c",
          dark: false,
          channel: "Github",
          icon: "mdi-github",
          url: "https://github.com/peeranat-dan/pomo-pomo",
          tags: ["Vue 3", "Vite", "Supabase", "TailwindCSS"],
          description: "A pomodoro timer developed with Vue 3 + Vite + Pinia.",
        },
      ],
    };
  },
  methods: {},
  computed: {
    screenHeight() {
      return screen.height;
    },
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
  color: #ffde82 !important;
}
</style>
