<template>
  <v-footer app dark color="hi" padless absolute>
    <v-row justify="center" no-gutters>
      <v-col class="hi py-4 text-center black--text" cols="12">
        <strong>{{ new Date().getFullYear() }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
