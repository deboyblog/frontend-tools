<template>
    <div id="#app">
        <div class="columns">
            <transition name="fadeLeft">
                <div class="column is-gapless is-2" v-show="showSlider">
                    <slider></slider>
                </div>
            </transition>
            <div class="column is-gapless" :class="{'is-12': !showSlider, 'is-10': showSlider}">
                <transition name="fadeRight">
                    <keep-alive>
                        <router-view class="container-warp"></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
        <a class="button slider-controller" @click="toggleSlider">
          <span class="icon">
            <i class="fa" :class="{'fa-close': showSlider, 'fa-bars': !showSlider}"></i>
          </span>
        </a>
    </div>
</template>
<script>
  import store from 'renderer/vuex/store'
  import slider from 'renderer/components/layout/slider'
  import * as types from './vuex/mutation-types'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    store,
    components: {
      slider
    },
    watch: {
      appLayout (val) {
        window.resizeTo(val.width, val.height)
      },
      showSlider (val) {
        console.log(val)
        if (val) {
          this.resetSetting()
        }
      }
    },
    computed: {
      ...mapGetters(['appLayout', 'showSlider'])
    },
    methods: {
      ...mapMutations({'toggleSlider': types.TOGGLE_SLIDER, 'resetSetting': types.RESET_SETTINGS})
    },
    mounted () {
      window.addEventListener('resize', () => {
        this.$store.commit(types.WINDOW_ON_RESIZE)
      })
    }
  }
</script>
<style lang="less" scoped>
    .container-warp {
        padding: 10px;
    }

    .slider-controller {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: white;
        position: fixed;
        bottom: 20px;
        left: 20px;
        .icon {
            margin: 0;
        }
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
    .border-r{
        border-right: 1px solid #cccccc;
    }
</style>
