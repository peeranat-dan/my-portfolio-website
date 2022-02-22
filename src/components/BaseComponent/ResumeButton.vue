<template>
  <v-btn
    outlined
    color="button"
    @click="getMyResume"
    :block="block"
    class="text-capitalize rounded-xl"
  >
    <v-icon class="mr-2">mdi-google-drive</v-icon>Get my resume
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      resumeUrl:
        "https://drive.google.com/file/d/19rnOZWjy4Y5icT7jbdAGaADzhl-L8nGq/view?usp=sharing",
    };
  },
  methods: {
    getMyResume() {
      window.open(this.resumeUrl);
    },
  },
  computed: {},
  props: {
    block: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
