<template>
  <div class="page-bg">
    <h2>视频解析</h2>
    <p class="desc">请将优酷、腾讯的视频链接粘贴到下面的输入框，进行解析免费播放地址</p>
    <div class="card">
      <div class="search">
        <input
          v-model="inputUrl"
          class="linkurl"
          type="text"
          placeholder="请将视频地址粘贴到这里, eg: https://v.qq.com/x/cover/c949qjcugx9a7gh.html">
        <button
          class="button primary"
          @click="parse">解析</button>
      </div>
      <div style="margin: 0 0 15px">
        <button
          v-for="(item, index) in urls"
          :key="index"
          :class="{active: item === nowUrl}"
          class="button"
          @click="changeParseAddress(index)">
          地址{{ index + 1 }}
        </button>
      </div>
      <iframe
        v-if="nowUrl"
        :src="nowUrl"
        frameborder="0" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUrl: '',
      urls: [],
      nowUrl: ''
    }
  },
  methods: {
    parse() {
      this.urls = [
        `http:\\/\\/api.taovb.com\\/?url=`,
        `http:\\/\\/jqaaa.com\\/jx.php?url=`,
        // `http:\\/\\/www.jingxinsy.cn\\/jx\\/?url=`,
        `http:\\/\\/api.agzb.vip\\/?url=`
      ].map(item => {
        return `${item}${this.inputUrl}`
      })
      this.changeParseAddress(0)
    },
    changeParseAddress(index) {
      this.nowUrl = this.urls[index]
    }
  }
}
</script>

<style lang="scss" scoped>
h2,
.desc {
  text-align: center;
}
.card {
  padding: 15px;
  border: 1px solid #f2f2f2;
  .search {
    width: 50%;
    min-width: 520px;
    margin: 15px auto;
    display: flex;
    .linkurl {
      line-height: 40px;
      flex: 1;
    }
    .button {
      width: 60px;
    }
  }
  .button {
    &.active {
      color: red;
    }
  }
  iframe {
    display: block;
    width: 100%;
    min-height: 440px;
  }
}
</style>
