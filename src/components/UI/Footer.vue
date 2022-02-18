<template>
  <v-footer
    app
    dark
    color="primary"
    absolute
    padless
    :height="isMobile ? 100 : 150"
  >
    <v-container class="pb-4">
      <div>
        <p>Contact me at</p>
        <a v-for="social in sns" :key="social.name" :href="social.url">
          <v-icon color="chip" class="mx-2 mb-1">{{ social.icon }}</v-icon>
        </a>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      sns: [
        {
          name: "Hit my mailbox!",
          icon: "mdi-email-outline",
          color: "chip",
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
  methods: {},
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "md"
      );
    },
  },
};
</script>

<style scoped>
a {
  outline: none;
  text-decoration: none;
  color: white !important;
}

a:hover {
  outline: none;
  text-decoration: none;
  color: #9cd779 !important;
}
</style>
