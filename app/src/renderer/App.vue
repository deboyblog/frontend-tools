<template>
    <div id="#app">
        <div class="columns">
            <div class="column is-2">
                <slider></slider>
            </div>
            <div class="column is-10">
                <transition name ="zoomDown">
                    <router-view class="container-warp"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
  import store from 'renderer/vuex/store'
  import slider from 'renderer/components/layout/slider'
  import * as types from './vuex/mutation-types'
  export default {
    store,
    components: {
      slider
    },
    mounted () {
      window.addEventListener('resize', () => {
        this.$store.commit(types.WINDOW_ON_RESIZE)
      })
    }
  }
</script>
<style lang="less" scoped>
    .container-warp{
        padding: 10px 10px 0 0;
    }
</style>
<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    html, body, #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
