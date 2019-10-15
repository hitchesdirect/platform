import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/vehicle/:year/:make/:model/:style',
			name: 'vehicle',
			component: () => import('./views/VehicleResults.vue'),
			props: (route) => ({
				year: route.params.year,
				make: route.params.make,
				model: route.params.model,
				trim: route.params.style,
		}),
		},
		{
			path: '/search/:query',
			name: 'search',
			component: () => import('./views/Search.vue'),
			props: (route) => ({query: route.params.query}),
		},
		{
			path: '/categories/:id/:title',
			name: 'category',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/Category.vue'),
			props: true,
			beforeEnter: (to, from, next) => {
				// store.dispatch('fetchRequest', to.params.id)
				store.dispatch('loadCategory', to.params.id);
				next();
			},
		},
		{
			path: '/contact',
			name: 'contact',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('./views/Contact.vue'),
			props: true,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('./views/About.vue'),
			props: true,
		},
	],
});

router.beforeResolve((to, from, next) => {
	if (store.state.flyout) {
		store.dispatch('toggleFlyout');
	}

	store.dispatch('fetchPrice');

	next();
});

export default router;
