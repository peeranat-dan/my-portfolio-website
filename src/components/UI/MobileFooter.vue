<template>
  <v-footer color="primary" app fixed style="height: 80px" dark>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12">
        <div class="text-center">
          <v-btn
            class="ml-3"
            color="chip"
            elevation="0"
            outlined
            @click="smoothScrolling('#about')"
            ><v-icon class="mr-2" color="chipB">mdi-arrow-up-circle</v-icon>to
            the top</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    smoothScrolling(link) {
      this.$vuetify.goTo(link, {
        duration: 700,
        offset: 0,
        easing: "easeInOutCubic",
      });
    },
  },
  computed: {},
};
</script>
