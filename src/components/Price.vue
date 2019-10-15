<template>
	<div class="price">
		<span>{{ price }}</span>
	</div>
</template>

<style scoped lang="scss">
@import "../main.scss";
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PriceConfig } from './PriceConfig';

@Component
export default class Price extends Vue {
	@Prop() public partNumber!: string;
	private price = '';

	private subscribe(mutation: any, state: any) {
		if (mutation === undefined || mutation === null) {
			return;
		}

		if (mutation.type !== 'SET_PRICE_MATRIX') {
			return;
		}

		const val = this.$store.getters.getPartPrice(this.partNumber);
		if (val === null || val === undefined) {
			this.price = 'Call for Pricing';
			return;
		}

		this.price = `$${val.price.toFixed(2)}`;
	}

	private mounted() {
		const val = this.$store.getters.getPartPrice(this.partNumber);
		if (val === null || val === undefined) {
			this.price = 'Call for Pricing';
		} else {
			this.price = `$${val.price.toFixed(2)}`;
		}

		this.$store.subscribe(this.subscribe);
	}
}
</script>