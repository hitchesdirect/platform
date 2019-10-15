<template>
	<div>
		<div class="banner"></div>
		<p>Your search {{ query }} took {{ howLong() }}ms.</p>
		<ProductResults v-bind:search="this.searchResults || {}" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import ProductResults from '../components/ProductResults';
import { SearchResult } from '../components/SearchResult';

@Component({
	components: {
		ProductResults,
	},
	computed: {
		...mapState(['searchResults']),
	},
	props: {
		query: String,
	},
})

class Search extends Vue {
	@Prop() public query!: string;
	private searchResults!: SearchResult;

	private getHits() {
		if (this.searchResults === undefined || this.searchResults === null) {
			return [];
		}

		if (this.searchResults.hits === undefined || this.searchResults.hits === null) {
			return [];
		}
		return this.searchResults.hits.hits || [];
	}

	private howLong() {
		if (this.searchResults === undefined || this.searchResults === null) {
			return '-';
		}

		if (this.searchResults.hits === undefined || this.searchResults.hits === null) {
			return '-';
		}
		return this.searchResults.took || '-';
	}

	private created() {
		this.$store.dispatch('executeSearch', this.query);
	}
}

export default Search;
</script>

<style scoped lang="scss">
@import 'src/assets/css/contact.scss';
</style>
