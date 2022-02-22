<template>
  <v-card
    class="project-card rounded-xl"
    height="250"
    elevation="2"
    :light="!project.dark"
  >
    <v-card-title class="white--text text-h5">
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
      <a @click="openNewTab(project.url)">
        <strong>{{ project.channel }}</strong>
      </a>
      <v-icon class="ml-2" x-small color="chip">mdi-open-in-new</v-icon>
    </v-card-text>
    <v-card-text class="chip--text" v-else>
      * No project repository due to confidential *
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openNewTab(url) {
      window.open(url);
    },
  },
  computed: {},
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  color: white !important;
  transition: 0.3s;
}
a:hover {
  color: #ffde82 !important;
}
.project-card {
  background-image: linear-gradient(
    to right bottom,
    #45654a,
    #435e47,
    #415744,
    #3e5141,
    #3c4a3e
  );
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
