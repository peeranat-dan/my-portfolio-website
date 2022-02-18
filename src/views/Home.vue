<template>
  <v-container
    class="align-center"
    style="height: 800px"
    align="center"
    justify="center"
  >
    <h3
      style="font-size: 10vw"
      class="d-flex justify-center mt-3 mb-3 font-weight-regular"
    >
      Developer | Photographer
    </h3>
    <v-row style="height: 500px" align="center">
      <MyPhoto v-if="isMobile" height="390px" />
      <v-img
        v-if="!isMobile"
        transition="scroll-y-transition"
        class="mx-auto"
        max-width="900"
        :src="require('../../assets/home.png')"
      ></v-img>
    </v-row>
    <div class="d-flex justify-center mt-12">
      Scroll down to know more about me<v-icon class="mx-3"
        >mdi-arrow-down</v-icon
      >
    </div>
  </v-container>
</template>

<script>
import MyPhoto from "../components/Photo/MyPhoto.vue";
export default {
  name: "Home",
  data() {
    return {
      screenWidth: screen.width,
    };
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
  components: { MyPhoto },
};
</script>
