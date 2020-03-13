<template>
  <div class="header">
    <router-link to="/" class="brand">GitHub</router-link>

    <div v-if="user" class="user">
      <div class="avatar">
        <img :src="user.avatar_url" />
      </div>
      <router-link :to="`/${user.login}`" class="label">{{user.login}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 10px;
  border-bottom: solid 1px #eee;
  margin-bottom: 5px;
  box-shadow: 0 0px 5px 0px #aaa;
  display: flex;
  justify-content: space-between;
  background: #fff;

  .brand {
    font-size: 22px;
    font-weight: bold;
    padding-top: 4px;
  }

  .user {
    display: flex;

    .avatar {
      width: 30px;
      overflow: hidden;
      border-radius: 3px;

      img {
        width: 100%;
      }
    }

    .label {
      font-weight: bold;
      font-size: 18px;
      padding: 5px 10px;
      color: #333;
    }
  }
}
</style>
