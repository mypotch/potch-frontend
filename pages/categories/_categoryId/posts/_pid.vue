<template>
  <div class="post page-bg">
    <h2>{{ post.title }}</h2>
    <div class="sub-info">
      <span>{{ post.created_time }}</span> |
      <span>分类：<nuxt-link :to="`/categories/${category.id}`">{{ category.name }}</nuxt-link></span>
      <span class="fr">浏览量：{{ post.counter.views_count }}</span>
    </div>
    <div v-html="post.content"/>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    let categoryResult = await app.$axios.get(
      `v1/categories/${params.categoryId}`
    )
    let postResult = await app.$axios.get(
      `v1/categories/${params.categoryId}/posts/${params.pid}`
    )
    return { category: categoryResult.data.item, post: postResult.data.item }
  }
}
</script>

<style lang="scss" scoped>
.post {
  h2 {
    text-align: center;
  }
  .sub-info {
    color: #888;
    padding-bottom: 15px;
  }
}
</style>
