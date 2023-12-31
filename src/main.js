import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入ElementUI组件库
import ElementUI from 'element-ui';
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

//应用ElementUI
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
