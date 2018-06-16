import Vue from 'vue'
import App from './App.vue'
import VueFrame from 'vue-frame'

export const bus=new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})

export default App
