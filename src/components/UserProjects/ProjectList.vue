<template>
  <div class="project-list">
    <div v-if="projects.length" class="project-list">
      <ProjectItem :key="project.id"
        v-for="project in projects"
        :username="user.login"
        :data="project" />
    </div>
    <Jumbotron v-else>
      <h2>{{user.login}} doesn't have any projects yet.</h2>
    </Jumbotron>
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue';
import ProjectItem from '@/components/UserProjects/ProjectItem.vue';

export default {
  name: 'ProjectList',
  components: {
    Jumbotron,
    ProjectItem,
  },
  props: {
    projects: Array,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped lang="scss">
.project-list {
  background: #fff;
}
</style>
