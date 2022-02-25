<template>
  <v-container class="mt-2" justify="center">
    <v-card elevation="0" class="rounded-lg pa-5 gallery">
      <h2 class="text--secondary font-weight-regular mb-5">Photo Gallery</h2>
      <v-sheet max-width="900" class="mx-auto py5 gallery">
        <v-slide-group show-arrows v-model="model" center-active>
          <v-slide-item v-for="address in src" :key="address" class="py-5">
            <PhotoItem :src="address" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
import PhotoItem from "@/components/Photo/PhotoItem";
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
      model: "",
    };
  },
  methods: {
    openNewTab(url) {
      window.open(url);
    },
  },
  computed: {},
  components: {
    PhotoItem,
  },
};
</script>
