<template>
  <v-container
    class="px-3"
    style="height: 700px"
    align="center"
    justify="center"
  >
    <div class="text-sm-h5 text--secondary">About me</div>
    <v-row class="mt-5">
      <!-- <v-col :cols="column"> -->
      <v-col xs="12" sm="12" md="12" lg="8" xl="8">
        <div class="text-sm-h6">Hi, I'm</div>
        <div class="text-sm-h3 font-weight-medium">
          Peeranat Danaidusadeekul.
        </div>
        <div class="text--secondary mt-4">
          I'm a fourth year <strong>Industrial Engineering student</strong> at
          Chulalongkorn University who currently seeking for more challenging
          job opportunities in fields of
          <strong>front-end and back-end developers</strong>.
        </div>
        <v-btn outlined class="mt-3" color="hi" :href="resumeUrl">
          <v-icon class="mr-2">mdi-google-drive</v-icon>Get my resume!
        </v-btn>
        <div class="text-sm-h5 mt-6 mb-4">Hard Skills</div>
        <v-chip outlined v-for="skill in skills" :key="skill" class="mx-1 my-1">
          {{ skill }}
        </v-chip>
        <div class="text-sm-h5 my-4">Soft Skills</div>
        <v-chip
          outlined
          v-for="skill in hardSkills"
          :key="skill"
          class="mx-1 my-1"
        >
          {{ skill }}
        </v-chip>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="4" xl="4">
        <v-img
          class="mt-10"
          max-width="300"
          v-if="myPicture"
          :src="require('../../assets/my-photo.jpg')"
        />
      </v-col>
    </v-row>
    <v-divider dark class="mt-5"></v-divider>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "HTML",
        "JavaScript",
        "CSS",
        "VueJS",
        "NuxtJS",
        "NodeJS",
        "SQL",
        "Python",
        "Git",
        "Language (Thai: Native, English: Fluent)",
      ],
      hardSkills: ["Collaborative", "Communication", "Team working"],
      resumeUrl:
        "https://drive.google.com/file/d/1zaljVBAhkWv1Usiyb8wQop_dwjJshDST/view?usp=sharing",
    };
  },
  computed: {
    myPicture() {
      const breakpoint = this.$vuetify.breakpoint.name;
      if (breakpoint === "xs" || breakpoint === "sm") {
        return false;
      }
      return true;
    },
  },
};
</script>
