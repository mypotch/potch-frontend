<template>
  <ul class="navbar">
    <li
      v-for="category in $store.state.homeData.category_roots"
      :key="category.id">
      <nuxt-link :to="`/categories/${category.id}`">{{ category.name }}</nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navbar {
  line-height: 20px;
  font-size: 16px;
  background: #fff;
  padding: 14px 15px;
  border-bottom: 1px solid #f2f2f2;

  li {
    display: inline;
    padding-right: 15px;
  }
}
</style>
