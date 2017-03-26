<template>
    <div @keyup.enter="copy">
        <label class="label">待转换像素 [px]</label>
        <p class="control">
            <input class="input" id="px2rem_needToConvert" v-model="needToConvert" type="text">
        </p>
        <label class="label">Rem宽度标准 [px]</label>
        <p class="control">
            <input class="input" v-model="remWidth" type="text">
        </p>
        <label class="label">UI图宽度标准 [px]</label>
        <p class="control">
            <input class="input" v-model="uiWidth" type="text">
        </p>
        <label class="label">转换倍率[例如: 1{{unit}} = *px]</label>
        <p class="control">
            <input class="input" v-model="multiple" type="text">
        </p>
        <p class="control">
            <label class="checkbox">
                <input type="checkbox" v-model="autoAddUnit">
                自动加单位?
              </label>
            &nbsp;
            &nbsp;
            <label class="checkbox">
                <input type="checkbox" v-model="autoAddSemicolon">
                转化结果自动加分号?
              </label>
        </p>
        <label class="label" v-show="autoAddUnit">请输入单位 [例如: Web端:rem 微信小程序:rpx]</label>
        <p class="control" v-show="autoAddUnit">
            <input class="input" v-model="unit" type="text">
        </p>
        <label class="label">转换结果</label>
        <p class="control">
            <input id="px2rem_convertRst" class="input" v-model="convertRst" type="text">
        </p>
        <p class="control">
            <button @click="copy" class="button is-info is-fullwidth is-outlined">复制(回车亦复制)</button>
        </p>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
</style>
<script type="text/ecmascript-6">
  import * as types from '../vuex/mutation-types'
  export default{
    components: {},
    data () {
      return {
        needToConvert: '',
        unit: 'rem',
        uiWidth: '750',
        remWidth: '750',
        multiple: '100',
        autoAddUnit: true,
        autoAddSemicolon: true
      }
    },
    computed: {
      convertRst: {
        cache: false,
        get () {
          let convert = this.needToConvert * parseFloat(this.remWidth / this.uiWidth) / this.multiple
          convert += this.autoAddUnit ? this.unit : ''
          convert += this.autoAddSemicolon ? ';' : ''
          return convert
        }
      }
    },
    methods: {
      copy () {
        let el = window.document.querySelector('#px2rem_convertRst') || null
        let input = window.document.querySelector('#px2rem_needToConvert') || null
        if (el && el.select) {
          try {
            el.select()
            window.document.execCommand('copy')
            el.blur()
            input.focus()
            this.$notify.open({
              content: '复制成功~',
              icon: 'smile-o',
              duration: 2000
            })
          } catch (err) {
            window.alert('请按下 Ctrl/Cmd+C 复制')
          }
        }
      }
    },
    activated () {
      this.$store.commit(types.RE_LAYOUT, {
        x: 380,
        y: 700,
        showSlider: false
      })
    }
  }
</script>
