<template>
    <div>
        <timeline>
            <timeline-item :date="todo.done ? ('完成日期: ' + todo.finishDate) : 'not yet'" v-for="todo in todos" :type="todo.done ? 'success' : 'warning'">
                {{todo.desc}}
              </timeline-item>
        </timeline>
        <ul>
            <li v-for="todo in todos"></li>
        </ul>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
</style>
<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        todos: [
          {
            name: 'Px2rem',
            finishDate: '2017-3-26',
            plan: '100%',
            done: true,
            desc: '用于px转rem'
          },
          {
            name: 'test',
            plan: '50%',
            done: false,
            finishDate: '',
            desc: '测试'
          }
        ]
      }
    },
    methods: {},
    preFetch () {
    },
    mounted () {
    }
  }
</script>
