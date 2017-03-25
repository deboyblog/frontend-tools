/**
 * Created by Deboy on 2017/3/25.
 */
export default {
  data () {
    return {}
  },
  computed: {
    fullHeight: {
      cache: false,
      get () {
        return {
          height: window.document.body.clientHeight + 'px'
        }
      }
    }
  },
  mounted () {
  }
}
