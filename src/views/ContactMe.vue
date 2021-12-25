<template>
  <v-container
    class="px-10 align-center"
    style="height: 700px"
    align="center"
    justify="center"
  >
    <div class="text-sm-h5 text--secondary mb-12">Contact me</div>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="12" lg="8" xl="8">
        <v-form @submit.prevent="submitData" ref="form">
          <v-textarea
            filled
            block
            color="hi"
            v-model="emailMsg"
            label="Leave your message here"
            :rules="[requiredRule]"
          ></v-textarea>
          <v-text-field
            filled
            block
            color="hi"
            label="Your email here"
            v-model="emailAns"
            :rules="[requiredRule]"
          />
          <v-btn block color="#51b081" type="submit"
            ><v-icon class="mr-2">mdi-email</v-icon>Hit my inbox</v-btn
          >
        </v-form>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="4" xl="4">
        <div class="my-3" v-for="social in sns" :key="social.name">
          <v-btn block outlined :color="social.color" :href="social.url"
            ><v-icon class="mr-2">{{ social.icon }}</v-icon
            >{{ social.name }}</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <BaseDialog :dialog="dialog" />
  </v-container>
</template>

<script>
import BaseDialog from "../components/BaseComponent/BaseDialog.vue";
export default {
  data() {
    return {
      dialog: false,
      requiredRule: (value) => !!value || "Please input something!",
      emailMsg: "",
      emailAns: "",
      sns: [
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
  computed: {},
  components: { BaseDialog },
};
</script>
