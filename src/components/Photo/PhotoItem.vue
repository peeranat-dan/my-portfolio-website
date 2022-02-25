<template>
  <v-img
    :src="require(`../../../assets/Gallery/${src}.jpg`)"
    class="grey lighten-2 rounded ma-4"
    elevation="2"
    :height="height"
    :width="width"
    aspect-ratio="1"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  props: ["src"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "md"
      );
    },
    width() {
      return this.isMobile ? "200" : "400";
    },
    height() {
      return this.isMobile ? "300" : "600";
    },
  },
};
</script>
