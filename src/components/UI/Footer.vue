<template>
  <v-footer app dark color="nav" absolute padless height="100">
    <v-row justify="center" no-gutters>
      <v-col class="mx-0" cols="2" v-for="social in sns" :key="social.name">
        <a :href="social.url"
          ><v-icon :color="social.color" class="mr-2 mb-1">{{
            social.icon
          }}</v-icon
          >{{ social.name }}</a
        >
      </v-col>
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
