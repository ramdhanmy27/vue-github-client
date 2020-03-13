<template>
  <div class="project-item">
    <div class="label">
      <router-link :to="`/${username}/${data.name}`" class="project-name">
        {{data.name}}
      </router-link>
      <div class="updated-time">{{updatedTime}}</div>
    </div>
    <div class="description">{{data.description}}</div>
    <div class="status">
      <span>{{data.language}}</span>
      <span>| Stars: {{data.stargazers_count}}</span>
      <span>| Forks: {{data.forks_count}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ProjectList',
  props: {
    username: String,
    data: Object,
  },
  computed: {
    updatedTime() {
      return moment(this.data.updated_at).fromNow();
    },
  },
};
</script>

<style scoped lang="scss">
  .project-item {
    padding: 10px;
    border-bottom: solid 1px #eee;

    &:hover {
      background: #fafafa;
    }

    .label {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 100%;

      .project-name {
        font-weight: bold;
        font-size: 16px;
        flex: 1;
      }

      .updated-time {
        font-size: 10px;
        color: #777;
        font-style: italic;
        padding: 5px 0;
        text-align: right;
      }
    }

    .description {
      font-size: 14px;
      padding: 5px 0;
    }

    .status {
      display: flex;
      margin-top: 5px;

      span {
        font-size: 12px;
        margin-right: 5px;
        color: #777;
      }
    }
  }
</style>
