<template>
  <div id="app">
    <Header />

    <Loading :loading="$store.state.loading">
      <router-view v-if="userExists" />
      <Jumbotron v-else>
        <h2>Page not found.</h2>
      </Jumbotron>
    </Loading>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

import Loading from '@/components/Loading.vue';
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: 'App',
  components: {
    Loading,
    Header,
    Jumbotron,
  },
  data() {
    return {
      loading: false,
      userExists: true,
    };
  },
  methods: {
    ...mapActions(['setUser']),
  },
  watch: {
    $route({ params }) {
      const { user = {} } = this.$store.state;

      if (params.username !== undefined && params.username !== user.login) {
        // get user data
        axios.get(`/users/${params.username}`)
          .then(({ data }) => {
            this.setUser(data);
            this.userExists = true;
          })
          .catch(() => {
            this.userExists = false;
          });
      }
    },
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}
a {
  text-decoration: none;
  color: #333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f7f7f7;
  height: 100%;
}
</style>
