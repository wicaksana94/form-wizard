import Home from './components/Home.vue';
import Form from './components/Form.vue';
import Summary from './components/Summary.vue';
import Error from './components/Error.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/form', component: Form },
    { path: '/summary', component: Summary, name:'summary' ,props: true },
    { path: '/error', component: Error },
];

export default routes;
