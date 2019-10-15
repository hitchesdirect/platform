import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductResult from './ProductResult.vue';
import { SearchResult } from './SearchResult';
import { VehicleResult } from './VehicleResult';
import { Part } from './Part';

interface ProductListing {
	parts: object[];
}

@Component({
	components: {
		ProductResult,
	},
})
export default class ProductResults extends Vue {
	@Prop() private listing!: ProductListing;
	@Prop() private search!: SearchResult;
	@Prop() private lookup!: VehicleResult;

	private renderListing(createElement: any) {
		if (this.listing == null) {
			return null;
		}

		const results: object[] = [];
		this.listing.parts.map((part: any) => {
			results.push(createElement('ProductResult', {
				props: {
					product: part,
				},
			}));
		});

		return createElement('div', {
			style: {
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
			},
		}, results);
	}

	private renderSearch(createElement: any) {
		if (this.search == null || this.search === undefined) {
			return null;
		}

		const res: SearchResult = this.search;

		if (this.search.hits == null || this.search.hits === undefined) {
			return null;
		}

		const results: object[] = [];
		res.hits.hits.map((part: any) => {
			switch (part._type) {
				case 'part':
					break;
				default:
					return;
			}

			switch (part._index) {
				case 'curt':
					break;
				default:
					return;
			}

			results.push(createElement('ProductResult', {
				props: {
					product: part._source,
				},
			}));
		});

		return createElement('div', {
			style: {
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
			},
		}, results);
	}

	private renderLookup(createElement: any) {
		if (this.lookup == null || this.lookup === undefined) {
			return null;
		}

		if (this.lookup.parts == null || this.lookup.parts === undefined) {
			return null;
		}

		const results: object[] = [];
		this.lookup.parts.map((part: Part) => {
			results.push(createElement('ProductResult', {
				props: {
					product: part,
				},
			}));
		});

		return createElement('div', {
			style: {
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
			},
		}, results);
	}

	private render(createElement: any) {
		if (this.listing !== null && this.listing !== undefined) {
			return this.renderListing(createElement);
		}

		if (this.search !== null && this.search !== undefined) {
			return this.renderSearch(createElement);
		}

		if (this.lookup !== null && this.lookup !== undefined) {
			return this.renderLookup(createElement);
		}
	}
}
