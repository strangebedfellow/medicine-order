// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueHtmlToPaper from 'vue-html-to-paper';
Vue.use(require('vue-moment'));
const options = {
  styles: [
   'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
 ]
}
Vue.use(VueHtmlToPaper, options);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
