<template>
  <div class="project-header">
    <div class="breadcrumb">
      <router-link :to="`/${username}`">
        <b>{{username}}</b>
      </router-link>

      <span> / </span>

      <router-link :to="`/${username}/${project.name}`">
        <b>{{project.name}}</b>
      </router-link>
    </div>

    <div class="status">
      <span>{{project.language}}</span>
      | <span>Stars: {{project.stargazers_count}}</span>
      | <span>Forks: {{project.forks_count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: {
    username: String,
    project: Object,
  },
};
</script>

<style scoped lang="scss">
.project-header {
  display: flex;
  justify-content: space-between;

  .breadcrumb {
    padding: 0 0 15px;
  }

  .status {
    color: #777;
    font-size: 12px;
    padding: 4px;
  }
}
</style>
