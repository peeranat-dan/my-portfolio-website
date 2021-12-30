<template>
  <v-container
    class="align-center"
    style="height: 700px"
    align="center"
    justify="center"
  >
    <div class="d-flex justify-center text-sm-h3 font-weight-medium">
      Peeranat Danaidusadeekul
    </div>
    <div class="d-flex justify-center text-sm-h6 mt-3 mb-3 font-weight-regular">
      Developer | Photographer
    </div>
    <v-row style="height: 450px" align="center">
      <MyPhoto v-if="isMobile" height="390px" />
      <v-img
        v-if="!isMobile"
        transition="scroll-y-transition"
        height="450px"
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
