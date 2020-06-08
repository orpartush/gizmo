import Vue from 'vue'

import layout3Columns from './cmps/wap-cmps/layout-3-columns.vue'
import layout2Columns from './cmps/wap-cmps/layout-2-columns.vue'
import appHeader from './cmps/wap-cmps/app-header.vue'
import appNav from "./cmps/wap-cmps/app-nav.vue";
import appCard from "./cmps/wap-cmps/app-card.vue";
import appGallery from "./cmps/wap-cmps/app-gallery.vue";
import appFooter from "./cmps/wap-cmps/app-footer.vue";
import appMap from './cmps/wap-cmps/app-map.vue';
import appContact from './cmps/wap-cmps/app-contact-us.vue';
import appChat from './cmps/wap-cmps/app-chat.vue';
import appSocialLinks from './cmps/wap-cmps/app-social-links.vue';
import appArticle from './cmps/wap-cmps/app-article.vue';
import appYoutube from './cmps/wap-cmps/app-youtube.vue';

Vue.component('layout-2-columns', layout2Columns);
Vue.component('layout-3-columns', layout3Columns);
Vue.component('app-header', appHeader);
Vue.component('app-nav', appNav);
Vue.component('app-card', appCard);
Vue.component('app-gallery', appGallery);
Vue.component('app-footer', appFooter);
Vue.component('app-map', appMap);
Vue.component('app-contact', appContact);
Vue.component('app-chat', appChat);
Vue.component('app-social-links', appSocialLinks);
Vue.component('app-article', appArticle);
Vue.component('app-youtube', appYoutube);

