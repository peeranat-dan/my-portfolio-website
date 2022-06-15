<template>
  <v-container
    class="px-5"
    :style="'height: ' + screenHeight + 'px'"
    fill-height
    justify="center"
  >
    <v-row align="center">
      <v-col xs="12" sm="12" md="12" lg="8" xl="8">
        <h3>Hi, I'm</h3>
        <h1 class="primary--text" :style="isMobile ? '' : 'font-size:3rem'">
          Peeranat Danaidusadeekul.
        </h1>
        <h5
          class="font-weight-regular"
          :style="isMobile ? '' : 'font-size:1.25rem'"
        >
          <v-icon small class="mr-2">mdi-xml</v-icon>developer |
          <v-icon small class="mr-2">mdi-camera</v-icon>photographer
        </h5>
        <div class="mt-5">
          I'm a
          <strong class="suplimentary--text"
            >graduated Industrial Engineering student</strong
          >
          from Chulalongkorn University. I'm interested in field of
          <strong class="suplimentary--text"
            >front-end and back-end developer</strong
          >.
        </div>
        <div class="mt-2">
          <v-btn
            icon
            v-for="social in sns"
            :key="social.name"
            :href="social.url"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="4" xl="4" class="mx-auto">
        <MyPhoto :height="isMobile ? '400' : '450'" />
        <ResumeButton class="mt-2 mx-auto" :block="true" v-if="isMobile" />
      </v-col>
    </v-row>
    <v-divider dark class="mt-5"></v-divider>
  </v-container>
</template>

<script>
import ResumeButton from "@/components/BaseComponent/ResumeButton.vue";
import MyPhoto from "@/components/Photo/MyPhoto";
export default {
  data() {
    return {
      resumeUrl:
        "https://drive.google.com/file/d/1zaljVBAhkWv1Usiyb8wQop_dwjJshDST/view?usp=sharing",
      sns: [
        {
          name: "Hit my mailbox!",
          icon: "mdi-email-outline",
          color: "hi",
          url: "mailto:ppeeranat.d@gmail.com",
        },
        {
          name: "Facebook",
          icon: "mdi-facebook",
          color: "#1877F2",
          url: "https://www.facebook.com/nprdphoto",
        },
        {
          name: "LinkedIn",
          icon: "mdi-linkedin",
          color: "#0A66C2",
          url: "https://www.linkedin.com/in/peeranatd/",
        },
        {
          name: "Github",
          icon: "mdi-github",
          color: "",
          url: "https://github.com/peeranat-dan",
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          color: "#E4405F",
          url: "https://instagram.com/nprdphoto",
        },
      ],
    };
  },
  computed: {
    myPicture() {
      const breakpoint = this.$vuetify.breakpoint.name;
      if (breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md") {
        return false;
      }
      return true;
    },
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "md"
      );
    },
    screenHeight() {
      return this.isMobile ? 780 : screen.height - 250;
    },
  },
  components: {
    ResumeButton,
    MyPhoto,
  },
};
</script>

<style scoped>
div {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
