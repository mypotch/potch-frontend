<template>
  <div>
    <span class="fl">分类：</span>
    <ul class="category-list">
      <li
        v-for="subCategory in categoryData.item.children"
        :key="subCategory.id">
        <nuxt-link :to="`/categories/${subCategory.id}`">{{ subCategory.name }}</nuxt-link>
      </li>
    </ul>
    <ul class="post-list">
      <li
        v-for="post in postsData.items"
        :key="post.pid">
        <nuxt-link :to="`/categories/${$route.params.id}/posts/${post.pid}`">
          <img
            :src="post.icon_link"
            class="icon" >
          <span class="title">{{ post.title }}</span>
        </nuxt-link>
        <p class="desc">{{ post.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    let categoryResult = await app.$axios.get(`v1/categories/${params.id}`)
    let postsResult = await app.$axios.get(`v1/categories/${params.id}/posts`)
    return { categoryData: categoryResult.data, postsData: postsResult.data }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  margin-bottom: 10px;
  overflow: hidden;
  li {
    display: inline;
    &:not(:last-child):after {
      color: #f2f2f2;
      content: '|';
      padding: 0 5px;
    }
  }
}
.post-list {
  li {
    background: #f5f5f5;
    padding: 6px;
    line-height: 24px;

    .icon {
      border-radius: 20px;
      width: 24px;
      height: 24px;
      font-size: 0;
      vertical-align: top;
    }
    .title {
      font-size: 16px;
    }
  }
}
</style>
