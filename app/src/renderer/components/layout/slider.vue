<template>
    <div id="slider" :style="fullHeight">
        <template v-for="menu in menus">
            <menus :label="menu.name">
                <template v-for="item in menu.childs">
                    <!--<menu-item :icon="item.icon" :to="item.route">{{item.name}}</menu-item>-->
                    <menu-item :to="item.route">{{item.name}}</menu-item>
                </template>
            </menus>
        </template>
    </div>
</template>
<style lang="less">
    #slider{
        display: block;
        height: 100%;
        border-right: 1px solid #cccccc;
        a {
            &.router-link-active {
                background-color: #f5f5f5;
                color: #3c81df;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        menus: [
          {
            name: '系统导航',
            childs: [
              {
                icon: 'home',
                name: '首页',
                route: {
                  name: 'Home'
                }
              }
            ]
          },
          {
            name: '常用工具',
            childs: [
              {
                icon: 'arrows',
                name: 'Px2rem',
                route: {
                  name: 'Px2rem'
                }
              }
            ]
          },
          {
            name: '莫忘充电',
            childs: [
              {
                icon: 'plug',
                name: '掘金',
                route: {
                  name: 'WebView',
                  query: {
                    url: 'https://juejin.im/welcome/frontend'
                  }
                }
              }
            ]
          },
          {
            name: '查查Wiki',
            childs: [
              {
                icon: 'search',
                name: '极客学院Wiki',
                route: {
                  name: 'WebView',
                  query: {
                    url: 'http://wiki.jikexueyuan.com/'
                  }
                }
              }
            ]
          },
          {
            name: '开个小差',
            childs: [
            ]
          }
        ]
      }
    }
  }
</script>
