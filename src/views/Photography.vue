<template>
  <v-container class="mt-2" justify="center">
    <v-card color="gallery" elevation="0" class="rounded-lg pa-5">
      <h2 class="text--secondary font-weight-regular mb-5">Gallery</h2>
      <v-row justify="center">
        <v-col
          v-for="address in src"
          :key="address"
          class="d-flex child-flex"
          cols="4"
        >
          <PhotoItem :src="address" />
        </v-col>
        <v-col cols="12">
          view more at
          <v-btn
            class="rounded-xl ml-2 mb-1 elevation-1 text-lowercase"
            color="#325038"
            dark
            href="https://instagram.com/nprdphoto"
          >
            <v-icon>mdi-instagram</v-icon>@nprdphoto
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import PhotoItem from "../components/Photo/PhotoItem.vue";
export default {
  data() {
    return {
      src: [
        "pproud1",
        "pproud2",
        "pproud3",
        "pearn1",
        "pearn2",
        "ptam1",
        "ppom1",
        "ppom2",
      ],
    };
  },
  methods: {},
  computed: {},
  components: {
    PhotoItem,
  },
};
</script>
