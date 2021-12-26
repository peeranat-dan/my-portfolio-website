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
    <div class="d-flex justify-center text-sm-h6 mt-2 mb-5 font-weight-regular">
      developer | photographer
    </div>
    <v-row style="height: 450px">
      <MyPhoto v-if="isMobile" height="400px"/>
      <v-img v-if="!isMobile" height="450px" :src="require('../../assets/home.png')"></v-img>
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
            return (this.$vuetify.breakpoint.name === "xs" ||
                this.$vuetify.breakpoint.name === "sm" ||
                this.$vuetify.breakpoint.name === "md");
        },
    },
    components: { MyPhoto }
};
</script>
