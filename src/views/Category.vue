<template>
	<div>
		<div v-if="this.$store.getters.getCategory" class="category">
			<h1>{{this.$store.getters.getCategory.title}}</h1>
			<h3>{{this.$store.getters.getCategory.short_description}}</h3>
			<CategoryContent v-bind:content="this.$store.getters.getCategory.content" />
			<ProductResults v-bind:listing="this.$store.getters.getCategory.product_listing" />
			<!-- <div v-html="`${category.content[0].text}`"></div> -->
		</div>
		<div v-if="!this.$store.getters.getCategory" class="no-category">
			Loading results ..
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../main.scss';

.category {
	padding: 25px 50px;

	h1 {
		color: $black;
		font-size: 34px;
		text-transform: uppercase;
	}

	.products {
		display: flex;
		flex-direction: column;
	}
}
</style>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductResults from '../components/ProductResults';
import CategoryContent from '../components/CategoryContent';
import _default from 'vuex';

interface ProductListing {
	parts: object[];
}

interface CategoryResult {
	product_listing: ProductListing;
	content: object[];
	title: string;
	short_description: string;
}

@Component({
	components: {
		CategoryContent,
		ProductResults,
	},
	// props: {
	// 	category: {
	// 		default: function () {
	// 			return {} as CategoryResult;
	// 		},
	// 	},
	// },
	computed: {
		category() {
			return this.$store.getters.getCategory;
		},
	},
})
export default class Category extends Vue {
	private mounted() {
		this.$store.dispatch('loadCategory', this.$route.params.id);
	}
}
</script>