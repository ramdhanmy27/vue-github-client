<template>
  <div>
    <div v-show="loading" class="loading">
      <h1>Loading</h1>
    </div>
    <div v-show="!loading">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped lang="scss">
.loading {
  color: #aaa;
  padding: 30px 0;
  text-align: center;
}
</style>
