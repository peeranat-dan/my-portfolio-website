<template>
  <v-btn
    outlined
    class="text-lowercase"
    color="hi"
    :href="resumeUrl"
    :block="block"
  >
    <v-icon class="mr-2">mdi-google-drive</v-icon>Get my resume!
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      resumeUrl:
        "https://drive.google.com/file/d/1XIa_oluit9LpCN1iguWbcsyXuer9h5WA/view?usp=sharing",
    };
  },
  methods: {},
  computed: {},
  props: {
    block: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
