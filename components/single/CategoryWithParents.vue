<template>
  <div class="clearfix category-list">
    <span class="fl">分类：</span>
    <ul>
      <li
        v-for="(subCategory, index) in fullPaths"
        :key="index">
        <nuxt-link
          v-if="fullPaths.length - 1 !== index"
          :to="`/categories/${subCategory.id}`">
          {{ subCategory.name }}
        </nuxt-link>
        <span v-else>{{ subCategory.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    fullPaths: {
      type: [Array],
      default: () => []
    }
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
      color: #68f;
      content: '/';
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
