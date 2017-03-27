/**
 * Created by Deboy on 2017/3/26.
 */
import * as types from '../mutation-types'
const defaultSettings = {
  enableCustomMode: process.env.NODE_ENV !== 'development',
  showSlider: true,
  windowWidth: 1024,
  windowHeight: 800
}
const state = {
  enableCustomMode: process.env.NODE_ENV !== 'development',
  showSlider: true,
  windowWidth: 1024,
  windowHeight: 800
}
const getters = {
  showSlider (state) {
    return state.showSlider
  },
  appLayout (state) {
    return {
      height: state.windowHeight,
      width: state.windowWidth
    }
  }
}
const mutations = {
  [types.TOGGLE_SLIDER] (state) {
    state.showSlider = !state.showSlider
  },
  // 传递一个新的布局 目前支持窗口宽高/是否展示侧边栏
  [types.RE_LAYOUT] (state, payload) {
    if (state.enableCustomMode) {
      state.windowWidth = payload.x
      state.windowHeight = payload.y
      state.showSlider = payload.showSlider
    } else {
      console.info('哎呀 自定义模式被关闭了哦~')
    }
  },
  [types.RESET_SETTINGS] (state) {
    Object.keys(defaultSettings).forEach((keys) => {
      state[keys] = defaultSettings[keys]
    })
  }
}
export default {
  state,
  getters,
  mutations
}
