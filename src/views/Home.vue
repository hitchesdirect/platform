<template>
	<div class="home">
		<Carousel class="banner" :loop="true" :mouseDrag="false" :centerMode="true" :autoplayTimeout="3000" :perPage="1" :autoplay="true" :navigationEnabled="false" :paginationEnabled="false">
			<Slide>
				<img src="/img/farm_ranch.jpg" alt>
			</Slide>
			<Slide>
				<img src="/img/dirtbike_trailer.jpg" alt>
			</Slide>
			<Slide>
				<img src="/img/a16.jpg" alt>
			</Slide>
			<Slide>
				<img src="/img/storefront.jpg" alt>
			</Slide>
			<Slide>
				<img src="/img/snowmobile.jpg" alt>
			</Slide>
		</Carousel>

		<div class="categories">
			<p>Shop By Category</p>
			<div>
				<div class="slide" v-for="cat in parentCategories" :key="cat.id">
					<router-link class="img" :to="`/categories/${cat.id}/${cat.title}`">
						<img v-bind:src="`${cat.icon.Scheme}://${cat.icon.Host}${cat.icon.Path}`">
					</router-link>
				</div>
			</div>
		</div>

		<div class="featured">
			<p>View Featured Products</p>
			<carousel :navigationEnabled="true" :perPageCustom="[[320, 1], [480, 2], [768, 3], [1224, 5], [1800, 6]]">
				<slide
					v-for="prod in featuredProducts" 
					:key="prod.id"
					class="slide"
				>
					<router-link class="img" :to="`/product/${prod.partNumber}/${prod.short_desc}`">
						<ProductResult :product="prod" />
					</router-link>
				</slide>
			</carousel>
		</div>

		
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Carousel, Slide } from 'vue-carousel';
import { mapGetters } from 'vuex';
import ProductResult from '../components/ProductResult.vue';


@Component({
	components: {
		ProductResult,
		Carousel,
		Slide,
	},
	computed: {
		...mapGetters(['featuredProducts', 'parentCategories']),
	},
	created() {
		this.$store.dispatch('loadFeaturedProducts');
	},
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import 'src/assets/css/home.scss';
</style>
