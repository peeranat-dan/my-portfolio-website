<template>
  <v-dialog v-model="dialog" width="400" persistent>
    <v-card class="pa-5">
      <v-card-text class="text-center"
        ><v-icon size="50" color="hi">mdi-check-circle</v-icon></v-card-text
      >
      <v-card-text class="text-center text-sm-h5 font-weight-bold"
        >I've received your email!</v-card-text
      >
      <v-card-text class="text-center text-sm-subtitle-1"
        >Will contact you back soon asap.</v-card-text
      >
      <v-btn color="red" block><v-icon>mdi-close</v-icon>Close</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
