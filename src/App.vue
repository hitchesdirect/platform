<template>
	<div id="app">
		<div class="menu">
			<Promo />
			<Navigation class="nav"/>
			<Flyout :flyout="flyout()"/>
			<Lookup />
		</div>
		

		<div class="view">
			<router-view :key="$route.fullPath" />
		</div>
		<Footer />
	</div>
</template>

<style lang="scss">
@import "~bulma/bulma";

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $black;

	.view {
		width: 100%;
	}
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Promo from '@/components/Promo.vue';
import Flyout from '@/components/Flyout.vue';
import Footer from '@/components/Footer.vue';
import Lookup from '@/components/Lookup.vue'; // @ is an alias to /src

@Component({
	components: {
		Navigation,
		Flyout,
		Lookup,
		Footer,
		Promo,
	},
})
export default class App extends Vue {

	private category() {
		return this.$store.state.category;
	}

	private flyout() {
		return this.$store.state.flyout;
	}
}
</script>
