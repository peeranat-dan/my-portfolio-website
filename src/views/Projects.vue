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
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "../components/Projects/ProjectCard.vue";
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
  components: { ProjectCard },
};
</script>
