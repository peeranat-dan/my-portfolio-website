<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="project-card rounded-xl"
      height="250"
      elevation="2"
      :light="!project.dark"
    >
      <v-expand-transition>
        <div
          v-if="hover && !!project.url && !isMobile"
          class="d-flex transition-fast-in-fast-out project-card-hover v-card--reveal justify-center align-center rounded-xl white--text"
          style="height: 100%"
          @click="openNewTab(project.url)"
        >
          <p>
            Visit
            <v-icon color="white" class="mx-1">{{ project.icon }}</v-icon>
            {{ project.channel }}
          </p>
        </div>
        <div
          v-if="hover && !project.url && !isMobile"
          class="d-flex transition-fast-in-fast-out project-card-hover-no-url v-card--reveal justify-center align-center rounded-xl white--text"
          style="height: 100%"
        >
          <p>* No project repository due to confidential *</p>
        </div>
      </v-expand-transition>
      <div v-if="!hover">
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
      </div>
      <v-card-actions v-if="isMobile">
        <p class="chip--text ml-4 mt-4" v-if="!project.url">
          * No project repo
        </p>
        <v-btn
          class="ml-2 mt-5 rounded-xl chip primary--text"
          elevation="12"
          @click="openNewTab(project.url)"
          small
          v-else
          ><v-icon color="primary" class="mr-1">{{ project.icon }}</v-icon>
          Visit {{ project.channel }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-hover>
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
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "md"
      );
    },
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
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

.project-card-hover {
  background-image: linear-gradient(
    to right top,
    #565a7a,
    #626687,
    #6f7394,
    #7b7fa1,
    #888caf
  );
  cursor: pointer;
}

.project-card-hover-no-url {
  background-image: linear-gradient(
    to right bottom,
    #8d4745,
    #9b5351,
    #a9605c,
    #b86c69,
    #c67975
  );
}
</style>
