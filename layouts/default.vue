<template>
  <div>
    <NavBar />
    <div class="main-body">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/single/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.main-body {
  margin: 0 auto;
  min-height: 100vh;
  padding: 10px 25px;
  width: 82%;
  @include mobile-device {
    width: 100%;
  }
}
</style>
