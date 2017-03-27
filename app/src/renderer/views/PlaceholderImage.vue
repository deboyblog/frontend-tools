<template>
  <div>
    <div class="columns">
      <div class="column is-5 is-gapless border-r" :style="fullHeight">
        <label class="label">宽度</label>
        <p class="control">
          <input class="input" type="number" v-model="setting.width" placeholder="宽">
        </p>
        <label class="label">高度</label>
        <p class="control">
          <input class="input" type="number" v-model="setting.height" placeholder="高">
        </p>
        <label class="label">显示文字</label>
        <p class="control">
          <input class="input" type="text" v-model="setting.text" placeholder="显示文字">
        </p>
        <label class="label">背景色</label>
        <p class="control">
          <chrome-picker v-model="background" @change-color="(res) => {background = res}"></chrome-picker>
        </p>
        <label class="label">字体颜色</label>
        <p class="control">
          <chrome-picker v-model="fontColor" @change-color="(res) => {fontColor = res}"></chrome-picker>
        </p>
      </div>
      <div class="column is-7">
        <collapse>
          <template v-for="placeholder in onlineList">
            <collapse-item :title="placeholder.name" actived>
              <img :src="getRealSrc(placeholder.rule)" alt="">
              <p> URL: {{getRealSrc(placeholder.rule)}}</p>
            </collapse-item>
          </template>
        
        </collapse>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less" rel="stylesheet/less">

</style>
<script type="text/ecmascript-6">
  import * as types from '../vuex/mutation-types'
  import { Chrome } from 'vue-color'
  export default{
    components: {
      'chrome-picker': Chrome
    },
    data () {
      return {
        onlineList: [
          {
            name: 'temp.im [用的七牛云 推荐]',
            website: 'http://temp.im/',
            rule: 'http://placeholder.qiniudn.com/[width]x[height]/[background]/[fontColor]'
          },
          {
            name: 'Fake images please?',
            website: 'https://fakeimg.pl/',
            rule: 'https://fakeimg.pl/[width]x[height]/[background]/[fontColor]/?text=[text]'
          }
        ],
        setting: {
          width: 100,
          height: 100,
          background: '#0000ff',
          fontColor: '#ffffff',
          text: 'Hello'
        },
        background: {
          hex: '#0000ff'
        },
        fontColor: {
          hex: '#ffffff'
        }
      }
    },
    watch: {
      background: {
        deep: true,
        handler (val) {
          this.setting.background = val.hex
        }
      },
      fontColor: {
        deep: true,
        handler (val) {
          this.setting.fontColor = val.hex
        }
      }
    },
    methods: {
      getRealSrc (rule) {
        let url = rule
        Object.keys(this.setting).forEach(key => {
          let value = this.setting[key] && this.setting[key].toString().replace('#', '')
          url = url.replace('[' + key + ']', value)
        })
        return url
      }
    },
    mounted () {
    },
    activated () {
      this.$store.commit(types.RE_LAYOUT, {
        x: 800,
        y: 900,
        showSlider: false
      })
    }
  }
</script>
