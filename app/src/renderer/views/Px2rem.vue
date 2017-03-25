<template>
    <div @keyup.enter="copy">
        <label class="label">待转换像素 [px]</label>
        <p class="control">
            <input class="input" v-model="needToConvert" type="text">
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
            <button @click="copy" class="button is-info is-outlined">复制</button>
        </p>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
</style>
<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        needToConvert: '',
        unit: 'rem',
        uiWidth: '750',
        remWidth: '750',
        multiple: '100',
        autoAddUnit: true
      }
    },
    computed: {
      convertRst: {
        cache: false,
        get () {
          return (this.needToConvert * parseFloat(this.uiWidth / this.remWidth) / this.multiple) + (this.autoAddUnit ? (this.unit + ';') : '')
        }
      }
    },
    methods: {
      copy () {
        let el = window.document.querySelector('#px2rem_convertRst') || null
        if (el && el.select) {
          try {
            el.select()
            window.document.execCommand('copy')
            el.blur()
          } catch (err) {
            window.alert('请按下 Ctrl/Cmd+C 复制')
          }
        }
      }
    }
  }
</script>
