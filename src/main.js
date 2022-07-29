import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueSweetalert2);

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');