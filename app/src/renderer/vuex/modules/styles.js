import * as types from '../mutation-types'

const state = {
  fullHeight: window.document.body.clientHeight + 'px',
  fullWidth: window.document.body.clientWidth + 'px'
}

const mutations = {
  [types.WINDOW_ON_RESIZE] (state) {
    state.fullHeight = window.document.body.clientHeight + 'px'
    state.fullWidth = window.document.body.clientWidth + 'px'
  }
}

export default {
  state,
  mutations
}
