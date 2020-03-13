<template>
  <div class="user-projects">
    <ProjectList v-if="projects !== null" :projects="projects" />
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

import ProjectList from '@/components/UserProjects/ProjectList.vue';

export default {
  name: 'UserProjects',
  data() {
    return {
      projects: null,
    };
  },
  components: {
    ProjectList,
  },
  methods: {
    ...mapActions(['setLoading']),
  },
  mounted() {
    const { username } = this.$route.params;

    this.setLoading(true);

    // get user projects from Github API
    axios.get(`/users/${username}/repos`)
      .then(({ data }) => {
        this.setLoading(false);
        this.projects = data;
      })
      .catch(() => {
        this.setLoading(false);
      });
  },
};
</script>
