<template>
  <v-card elevation="0" color="white">
    <v-card-title class="primary--text"
      ><v-icon class="mr-4">{{ skill.icon }}</v-icon
      >{{ skill.name }}</v-card-title
    >
    <v-card-text>{{ skill.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
