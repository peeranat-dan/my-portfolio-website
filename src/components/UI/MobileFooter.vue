<template>
  <v-footer color="hi" absolute app>
    <v-row no-gutters align="center" justify="center" style="height: 80px">
      <v-col cols="12">
        <div class="black--text text-center">
          <strong>2021</strong> - Peeranat D.
          <v-btn
            class="ml-3"
            color="#41493B"
            elevation="0"
            outlined
            @click="scrollToTop"
            ><v-icon class="mr-2" color="#41493B">mdi-arrow-up-circle</v-icon>to
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
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {},
};
</script>
