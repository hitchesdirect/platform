<template>
	<div v-if="product" class="result">
	<!-- <router-link  :to="`/product/${product.part_number}`" v-if="product" class="result"> -->
		<ProductImage class="product-image" v-bind:images="product.images" />
		<div class="callout">
			<BrandImage :brand="product.brand" />
			<span class="sku">SKU #{{product.part_number}}</span>
		</div>
		
		<span class="shortDesc">{{product.short_description}}</span>
		<div class="actions">
			<Price :partNumber="product.part_number" />
			<!-- <router-link :to="`/product/${product.part_number}`">
				<span>View Details</span>
			</router-link> -->
		</div>
	<!-- </router-link> -->
	</div>
</template>

<style scoped lang="scss">
@import "../main.scss";
@import "../assets/css/product_result.scss";
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductImage from './ProductImage';
import BrandImage from './BrandImage';
import Price from './Price.vue';
import { Part } from './Part';

@Component({
	components: {
		ProductImage,
		BrandImage,
		Price,
	},
})
export default class ProductResult extends Vue {
  @Prop() public product!: Part;
}
</script>