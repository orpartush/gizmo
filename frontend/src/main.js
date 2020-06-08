import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './styles/global.scss'
import * as VueGoogleMaps from 'vue2-google-maps';
import _ from 'lodash';

import '@fortawesome/fontawesome-free/css/all.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/js/all.js'
import vSelect from "vue-select";
import draggable from 'vuedraggable'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import './globalCmps.js'
import VueSweetalert2 from 'vue-sweetalert2';

var SocialSharing = require('vue-social-sharing');


Vue.use(SocialSharing);
Vue.use(VueSweetalert2);

Vue.component("draggable", draggable);
Vue.component("v-select", vSelect);

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCa_A7Pfp8VgZoZsDddRtPEL-tW_MFT7iY',
    libraries: 'places',
    region: 'IL',
    language: 'en',
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
