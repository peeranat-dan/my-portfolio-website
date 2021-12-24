<template>
  <v-container class="mx-3">
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
        <v-card :color="project.color" :light="!project.dark">
          <v-card-title>
            {{ project.name }}
          </v-card-title>
          <v-card-text>
            {{ project.description }}
          </v-card-text>
          <v-card-text>
            Visit <v-icon class="mx-1 mb-1">{{ project.icon }}</v-icon>
            {{ project.channel }}
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
          url: "fakeUrl",
          description:
            "Designed and developed a 500,000 THB worth telemedicine front-end and back-end side for True Digital Health.",
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
