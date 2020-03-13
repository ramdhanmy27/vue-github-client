<template>
  <div class="readme">
    <div v-if="mdContent.length" v-html="readmeHtml" />
    <Jumbotron v-else>
      <h2>This project doesn't have readme.md file.</h2>
    </Jumbotron>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'ProjectDetail',
  props: {
    mdContent: String,
  },
  data() {
    return {
      readmeHtml: '',
    };
  },
  mounted() {
    const md = MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });

    this.readmeHtml = md.render(this.mdContent);
  },
};
</script>

<style scoped lang="scss">
.readme {
  border: solid 1px #ccc;
  padding: 10px 20px;
  border-radius: 3px;
  background: #fff;
}
</style>
