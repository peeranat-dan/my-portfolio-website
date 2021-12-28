<template>
  <v-container
    class="px-3 align-center"
    style="height: 700px"
    align="center"
    justify="center"
  >
    <div class="text-sm-h5 text--secondary">Projects</div>
    <v-row class="mt-12">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        v-for="project in projects"
        :key="project.name"
      >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 0"
            :color="project.color"
            height="250"
            :light="!project.dark"
          >
            <v-card-title>
              {{ project.name }}
            </v-card-title>
            <v-card-text>
              {{ project.description }}
            </v-card-text>
            <div class="ml-3">
              <v-chip
                class="mx-1"
                color="hi"
                outlined
                v-for="tag in project.tags"
                :key="tag"
                >{{ tag }}</v-chip
              >
            </div>
            <v-card-text v-if="project.channel">
              Visit <v-icon class="mx-1 mb-1">{{ project.icon }}</v-icon>
              <a :href="project.url">
                {{ project.channel }}
              </a>
              <v-icon class="ml-2" x-small>mdi-open-in-new</v-icon>
            </v-card-text>
            <v-card-text v-else>
              * No project repository due to confidential *
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-divider class="mt-8" />
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
          dark: "false",

          icon: "mdi-circle-multiple",
          tags: ["NuxtJS", "NodeJS", "GCP"],
          description:
            "Designed and developed a mini telemedicine front-end and back-end system for True Digital Health.",
        },
        {
          name: "Portfolio website",
          color: "#244b5c",
          dark: "false",
          channel: "Github",
          icon: "mdi-github",
          url: "https://github.com/peeranat-dan/my-portfolio-website.git",
          tags: ["VueJS"],
          description:
            "Built own webpage to show my front-end developer skill and my personality.",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
a {
  color: white !important;
}
</style>
