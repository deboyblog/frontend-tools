<template>
    <div id="#app">
        <div class="columns">
            <div class="column is-2 menus">
                <menus label="工具类">
                    <template v-for="item in toolMenus">
                        <menu-item :icon="item.icon" :to="item.route">{{item.name}}</menu-item>
                    </template>
                </menus>
            </div>
            <div class="column is-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store,
    data () {
      return {
        isShowAside: false,
        toolMenus: [
          {
            icon: 'arrows',
            name: 'Px2rem',
            route: {
              name: 'Px2rem'
            }
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped="">
    .menus {
        height: 100%;
        border-right: 1px solid gray;
        margin-right: 10px;
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
    }
</style>
