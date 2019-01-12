<template>
  <div>
    <div class="box-card page-bg">
      <div class="clearfix header">常用工具</div>
      <div>
        <a
          href="https://www.kuaidi100.com"
          target="_blank">
          速查快递
        </a>
      </div>
    </div>
    <div class="box-card page-bg">
      <div class="clearfix header">影视音乐</div>
      <div>
        <router-link
          target="_blank"
          to="/nomaltools/videoparse">
          视频解析
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderCode: ''
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.box-card {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 0 1px #7f828b;

  .header {
    font-size: 16px;
    margin-bottom: 5px;
  }
}
</style>
