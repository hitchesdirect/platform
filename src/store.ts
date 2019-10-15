import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { PriceConfig } from './components/PriceConfig';
import { Vehicle } from './components/Vehicle';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		categories: [],
		featuredProducts: [],
		loadingMenu: false,
		contactSent: false,
		contactError: null,
		flyout: false,
		burgerMenu: false,
		category: {},
		searchResults: {},
		partIndex: {},
		lookupState: {},
		vehicleState: new Vehicle(0, '', '', ''),
	},
	mutations: {
		SET_MENU: (state, categories) => {
			state.categories = categories;
		},
		SET_CATEGORY: (state, category) => {
			state.category = category;
		},
		SET_FEATURED_PRODS: (state, featured) => {
			state.featuredProducts = featured;
		},
		SET_CONTACT_ERROR: (state, error) => {
			state.contactError = error;
		},
		SET_CONTACT_SENT: (state, val) => {
			state.contactSent = val;
		},
		SET_SEARCH_RESULTS: (state, val) => {
			state.searchResults = val;
		},
		SET_PRICE_MATRIX: (state, index) => {
			state.partIndex = index;
		},
		SET_LOOKUP_RESULT: (state, result) => {
			state.lookupState = {...state.lookupState, ...result};
		},
		SET_VEHICLE_STATE: (state, vehicle) => {
			state.vehicleState = vehicle;
		},
		setLoadingMenu(state, loading) {
			state.loadingMenu = loading;
		},
		toggleFlyout(state) {
			state.flyout = !state.flyout;
		},
		toggleMenu(state) {
			state.burgerMenu = !state.burgerMenu;
		},
	},
	actions: {
		loadMenu({ commit }) {
			commit('setLoadingMenu', true);
			axios
				.get(`${process.env.VUE_APP_API_DOMAIN}/category?brandID=1&key=${process.env.VUE_APP_API_KEY}`)
				.then((r) => r.data)
				.then((categories) => {
					commit('SET_MENU', categories);
					commit('setLoadingMenu', false);
				});
		},
		toggleFlyout({ commit }) {
			commit('toggleFlyout');
		},
		toggleMenu({ commit }) {
			commit('toggleMenu');
		},
		loadCategory({ commit }, id) {
			const url = `/category/${id}?key=${process.env.VUE_APP_API_KEY}`;
			axios.get(`${process.env.VUE_APP_API_DOMAIN}${url}`)
				.then((r) => r.data)
				.then((category) => {
					commit('SET_CATEGORY', category);
				});
		},
		loadFeaturedProducts({ commit }) {
			const url = `/part/featured?brand=1&key=${process.env.VUE_APP_API_KEY}`;
			axios.get(`${process.env.VUE_APP_API_DOMAIN}${url}`)
				.then((r) => r.data)
				.then((featured) => {
					commit('SET_FEATURED_PRODS', featured);
				});
		},
		setVehicleState({ dispatch, commit }, vehicle: Vehicle) {
			commit('SET_VEHICLE_STATE', vehicle);
			dispatch('queryVehicle', vehicle);
		},
		queryVehicle({ commit, state }) {
			let params = state.vehicleState.toQueryString();
			switch (params) {
				case '':
					params = `key=${process.env.VUE_APP_API_KEY}`;
					break;
				default:
					params = `${params}&key=${process.env.VUE_APP_API_KEY}`;
					break;
			}

			axios.get(`${process.env.VUE_APP_API_DOMAIN}/vehicle/curt?${params}`)
				.then((r) => r.data)
				.then((result) => {
					commit('SET_LOOKUP_RESULT', result);
				});
		},
		executeSearch({ commit }, term: string) {
			const url = `/search/${term}?brand=1&key=${process.env.VUE_APP_API_KEY}`;
			axios.get(`${process.env.VUE_APP_API_DOMAIN}${url}`)
				.then((r) => r.data)
				.then((results) => {
					commit('SET_SEARCH_RESULTS', results);
				});
		},
		fetchPrice({ commit }) {
			if (this.partIndex !== null && this.partIndex !== undefined) {
				return;
			}

			const url = `/cartIntegration?brandID=1&key=${process.env.VUE_APP_API_KEY}`;
			axios.get(`${process.env.VUE_APP_API_DOMAIN}${url}`)
				.then((r) => r.data)
				.then((results: object[]) => {
					const matrix: {[index: string]: PriceConfig} = {};
					results.map((res: PriceConfig) => {
						matrix[res.partNumber] = res;
					});
					commit('SET_PRICE_MATRIX', matrix);
				});
		},
		sendContact({ commit }, submission: object) {
			commit('SET_CONTACT_ERROR', null);
			commit('SET_CONTACT_SENT', false);
			const url = `https://us-central1-inspired-campus-229222.cloudfunctions.net/Submit`;
			axios.post(url, submission)
				.then((r) => {
					commit('SET_CONTACT_SENT', true);
				})
				.catch((err) => {
					commit('SET_CONTACT_ERROR', err);
				});
		},
	},
	getters: {
		menu: (state) => state.categories,
		menuLoading: (state) => state.loadingMenu,
		shouldFlyout: (state) => state.flyout || false,
		showBurger: (state) => state.burgerMenu || false,
		contactSent: (state) => state.contactSent,
		contactError: (state) => state.contactError,
		searchResults: (state) => state.searchResults,
		lookupState: (state) => state.lookupState || {},
		vehicleState: (state) => state.vehicleState || {},
		getPartPrice: (state) => (partID: string): any => {
			const idx: {[index: string]: PriceConfig} = state.partIndex;
			if (idx[partID] === null || idx[partID] === undefined) {
				return null;
			}

			return idx[partID];
		},
		parentCategories: (state) => {
			if (state === undefined || state === null) {
				return null;
			}

			return state.categories || [];
		},
		featuredProducts: (state) => {
			if (state === undefined || state === null) {
				return null;
			}

			return state.featuredProducts || [];
		},
		getCategory: (state) => {
			if (state === undefined || state === null) {
				return null;
			}

			return state.category || {};
		},
	},
});
