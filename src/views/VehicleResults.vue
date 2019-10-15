<template>
	<div class="results">
		<div class="header">
			<p>{{ text }} has {{ count }} products.</p>
		</div>

		<ProductResults :lookup="parts()" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Vehicle } from '../components/Vehicle';
import { VehicleResult } from '../components/VehicleResult';
import ProductResults from '../components/ProductResults';

@Component({
	components: {
		ProductResults,
	},
	computed: {
		...mapGetters(['vehicleState', 'lookupState']),
	},
})
export default class VehicleResults extends Vue {
	private text: string = '';
	private count: number = 0;
	@Prop() private year!: number;
	@Prop() private make!: string;
	@Prop() private model!: string;
	@Prop() private trim!: string;

	private created() {
		const vehicle = new Vehicle(this.year, this.make, this.model, this.trim);
		this.$store.dispatch('setVehicleState', vehicle);

	}

	private parts(): VehicleResult {
		if (this.$store === undefined) {
			return {} as VehicleResult;
		}

		if (this.$store.state === undefined) {
			return {} as VehicleResult;
		}

		const res: VehicleResult = this.$store.state.lookupState || {} as VehicleResult;

		this.count = res.parts ? res.parts.length : 0;
		this.text = `${this.year} ${this.make} ${this.model} ${this.trim}`;

		return res;
	}
}
</script>

<style scoped lang="scss">
@import 'src/main.scss';
.header {
	padding: 25px;
	display: flex;
	align-items: center;

	p {
		font-size: 16px;
		color: $black;
	}
}

.results {
	margin: 2rem auto 4rem;
}
</style>
