<template>
  <v-container justify="center">
    <h2 class="text--secondary font-weight-regular mb-5">Skills</h2>
    <h3 class="mt-6 mb-4 primary--text">Hard Skills</h3>
    <div v-if="isMobile">
    <v-chip
      outlined
      color="primary"
      v-for="skill in hardSkills"
      :key="skill.name"
      class="mx-1 my-1">
      {{ skill.name }}
    </v-chip>
    </div>
    <div v-if="!isMobile">
      <v-row justify="center">
        <v-col
          v-for="skill in hardSkills"
          :key="skill.name"
          class="d-flex child-flex"
          cols="4"
        >
          <SkillCard :skill="skill"/>
        </v-col>
      </v-row>
    </div>

    <h3 class="my-4 suplimentary--text">Soft Skills</h3>
    <v-chip
      outlined
      color="suplimentary"
      v-for="skill in softSkills"
      :key="skill"
      class="mx-1 my-1"
    >
      {{ skill }}
    </v-chip>

    <h3 class="mt-6 mb-4">Other interests</h3>
    <v-chip
      outlined
      color="blue-grey darken-1
"
      v-for="interest in otherInterests"
      :key="interest"
      class="mx-1 my-1">
      {{ interest }}
    </v-chip>
  </v-container>
</template>

<script>
import SkillCard from "@/components/Skill/SkillCard";
export default {
  data() {
    return {
      hardSkills: [
        { name: "HTML+JS+CSS", icon: "mdi-web", description: "Intermediate level"},
        { name: "VueJS + NuxtJS", icon: "mdi-vuejs", description: "Intermediate level"},
        { name: "ReactJS", icon: "mdi-react", description: "Being Developed"},
        { name: "NodeJS", icon: "mdi-nodejs", description: "Intermediate level"},
        { name: "Git", icon: "mdi-git", description: "Basic Level"},
        { name: "English", icon: "mdi-translate", description: "Fluent level"},
      ],
      softSkills: ["Collaborative", "Communication", "Team working", "Flexibility"],
      otherInterests: ["Games", "Photography", "Thai-Pop music"]
    };
  },
  methods: {},
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "md"
      );
    },
  },
  components: {
    SkillCard
  }
};

</script>

<style scoped>

</style>