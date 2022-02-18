<template>
  <v-container class="px-3 align-center" fill-height justify="center">
    <div class="text-sm-h5 text--secondary mb-12">Contact me</div>
    <v-row justify="start" align="center">
      <v-col xs="12" sm="12" md="12" lg="4" xl="4">
        <div class="my-3" v-for="social in sns" :key="social.name">
          <v-btn block outlined :color="social.color" :href="social.url"
            ><v-icon class="mr-2">{{ social.icon }}</v-icon
            >{{ social.name }}</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    submitData() {
      if (this.$refs.form.validate()) {
        this.dialog = !this.dialog;
      }
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
  // components: { BaseDialog },
};
</script>
