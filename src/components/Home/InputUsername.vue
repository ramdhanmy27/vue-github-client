<template>
  <div class="input-username">
    <h2>Github Username</h2>
    <div>
      <input type="text"
        name="username"
        v-model="username"
        @keyup.enter="inputUsername(username)" />
      <button type="button" @click="inputUsername(username)">Go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputUsername',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    inputUsername(username) {
      this.$emit('input', username);
    },
  },
};
</script>

<style scoped lang="scss">
.input-username {
  margin: 30px auto;
  padding: 20px 30px 50px;
  border-radius: 3px;
  border: solid 1px #eee;
  width: 300px;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 5px #ccc;

  input {
    padding: 5px;
    border-radius: 3px 0 0 3px;
    border: solid 1px #ccc;
  }

  button {
    padding: 6px 10px;
    border-radius: 0 3px 3px 0;
    background: #09f;
    border: none;
    color: #fff;
  }
}
</style>
