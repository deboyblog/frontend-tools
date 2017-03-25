<template>
    <div id="#app">
        <div class="columns">
            <div class="column is-2">
                <slider></slider>
            </div>
            <div class="column is-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
  import store from 'renderer/vuex/store'
  import slider from 'renderer/components/layout/slider'
  export default {
    store,
    components: {
      slider
    }
  }
</script>
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
