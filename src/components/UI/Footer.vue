<template>
  <v-footer app dark color="nav" absolute padless height="100">
    <div class="ml-10 font-weight-bold">Contact</div>
    <v-row justify="center" no-gutters v-for="social in sns" :key="social.name">
      <center>
        <v-col class="mx-0">
          <v-btn
            elevation="0"
            color="nav"
            :href="social.url"
            class="text-capitalize"
            ><v-icon :color="social.color" class="mr-2">{{
              social.icon
            }}</v-icon
            >{{ social.name }}</v-btn
          >
        </v-col>
      </center>
    </v-row>
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
  methods: {},
  computed: {},
};
</script>
