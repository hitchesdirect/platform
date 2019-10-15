import Vue from 'vue';
import { mapGetters } from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './main.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
	computed: {
		...mapGetters(['menu']),
	},
	created() {
		this.$store.dispatch('loadMenu');
	},
}).$mount('#app');
