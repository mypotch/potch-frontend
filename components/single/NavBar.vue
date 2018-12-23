<template>
  <ul class="navbar">
    <li>
      <nuxt-link
        :class="{actived: $route.name === 'index'}"
        to="/">
        首页
      </nuxt-link>
    </li>
    <li
      v-for="category in $store.state.homeData.category_roots"
      :key="category.id">
      <nuxt-link
        :class="{actived: $route.name === 'categories-id' && $route.params.id == category.id}"
        :to="`/categories/${category.id}`">{{ category.name }}</nuxt-link>
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

  a {
    color: inherit;
    &:hover {
      color: #409eff;
    }
    &.actived {
      color: #409eff;
    }
  }

  li {
    display: inline;
    padding-right: 15px;
  }
}
</style>
