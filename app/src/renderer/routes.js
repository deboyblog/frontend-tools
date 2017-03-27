export default [
  {
    path: '/',
    name: 'Home',
    component: require('views/Home')
  },
  {
    path: '/Px2rem',
    name: 'Px2rem',
    component: require('views/Px2rem')
  },
  {
    path: '/PlaceholderImage',
    name: 'PlaceholderImage',
    component: require('views/PlaceholderImage')
  },
  {
    path: '/WebView',
    name: 'WebView',
    component: require('views/WebView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
