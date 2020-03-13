<template>
  <div class="user-projects">
    <div v-if="project">
      <ProjectHeader :username="username" :project="project" />
      <Readme :mdContent="mdContent" />
    </div>
    <Jumbotron v-else>
      <h2>Project not found.</h2>
    </Jumbotron>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

import Jumbotron from '@/components/Jumbotron.vue';
import ProjectHeader from '@/components/ProjectDetail/ProjectHeader.vue';
import Readme from '@/components/ProjectDetail/Readme.vue';

export default {
  name: 'ProjectDetail',
  components: {
    Jumbotron,
    ProjectHeader,
    Readme,
  },
  data() {
    const { username } = this.$route.params;

    return {
      username,
      mdContent: '',
      project: null,
    };
  },
  methods: {
    ...mapActions(['setLoading']),
  },
  mounted() {
    const { username, project: projectName } = this.$route.params;

    this.setLoading(true);

    const projectReq = axios.get(`/repos/${username}/${projectName}`);
    const readmeReq = axios.get(`/repos/${username}/${projectName}/readme`);

    axios.all([projectReq, readmeReq])
      .then(axios.spread((project, readme) => {
        this.project = project.data;
        this.mdContent = Buffer.from(readme.data.content, 'base64').toString();

        this.setLoading(false);
      }))
      .catch(() => {
        this.setLoading(false);
      });
  },
};
</script>

<style scoped lang="scss">
.user-projects {
  padding: 10px;
}
</style>
