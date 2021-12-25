<template>
  <v-container
    class="px-10 align-center"
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
            height="200"
            :light="!project.dark"
          >
            <v-card-title>
              {{ project.name }}
            </v-card-title>
            <v-card-text>
              {{ project.description }}
            </v-card-text>
            <a :href="project.url">
              <v-card-text>
                Visit <v-icon class="mx-1 mb-1">{{ project.icon }}</v-icon>
                {{ project.channel }}
              </v-card-text></a
            >
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
          channel: "medium",
          icon: "mdi-circle-multiple",
          url: "fakeUrl",
          description:
            "Designed and developed a 500,000 THB worth telemedicine front-end and back-end side for True Digital Health.",
        },
        {
          name: "Portfolio website",
          color: "#244b5c",
          dark: "false",
          channel: "github",
          icon: "mdi-github",
          url: "https://github.com/peeranat-dan/my-portfolio-website.git",
          description:
            "Built own webpage to show my front-end developer skill and my personality.",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  created() {
    console.log(this.$vuetify.breakpoint.name);
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  color: white !important;
}
</style>
