<template>
  <v-img src="../../../assets/my-photo.jpg" contain :height="height"></v-img>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: false,
    },
  },
};
</script>
