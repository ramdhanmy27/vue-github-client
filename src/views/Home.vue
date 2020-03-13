<template>
  <div class="home">
    <InputUsername @input="setUsername" />
  </div>
</template>

<script>
import InputUsername from '@/components/Home/InputUsername.vue';

export default {
  name: 'Home',
  components: {
    InputUsername,
  },
  methods: {
    setUsername(username) {
      this.$router.push(username);
    },
  },
};
</script>
