<template>
  <div>
    <category-with-parents
      v-if="postsData"
      :full-paths="postsData.category_with_parents"/>
    <div class="category-list">
      <ul>
        <li
          v-for="subCategory in categoryData.item.children"
          :key="subCategory.id">
          <nuxt-link :to="`/categories/${subCategory.id}`">{{ subCategory.name }}</nuxt-link>
        </li>
      </ul>
    </div>
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
import CategoryWithParents from '@/components/single/CategoryWithParents'
export default {
  async asyncData({ app, params }) {
    let categoryResult = await app.$axios.get(`v1/categories/${params.id}`)
    let postsResult = await app.$axios.get(`v1/categories/${params.id}/posts`)
    return { categoryData: categoryResult.data, postsData: postsResult.data }
  },
  components: {
    CategoryWithParents
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  li {
    display: inline-block;
    a {
      display: inline-block;
      line-height: 80px;
      margin: 5px 15px 15px 0;
      padding: 5px 30px;
      background: #fafafa;
      border-radius: 5px;
    }
  }
}
.post-list {
  li {
    background: #fcfcf9;
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
