<template>
	<form @submit.prevent="submit()" class="lookup">
		<div>
			<span>Select Vehicle</span>
		</div>
		<div class="control">
			<div class="select is-small">
				<select name="year" id="year" @change="updateVehicle($event, 'year')">
					<option value="">- Year -</option>
					<option v-for="(year, i) in lookupState.available_years" v-bind:key="i">{{ year }}</option>
				</select>
			</div>
		</div>
		<div class="control">
			<div class="select is-small">
				<select name="make" id="make" @change="updateVehicle($event, 'make')">
					<option value="">- Make -</option>
					<option v-bind:value="make" v-for="(make, i) in lookupState.available_makes" v-bind:key="i">{{ make }}</option>
				</select>
			</div>
		</div>
		<div class="control">
			<div class="select is-small">
				<select name="model" id="model" @change="updateVehicle($event, 'model')">
					<option value="">- Model -</option>
					<option v-bind:value="model" v-for="(model, i) in lookupState.available_models" v-bind:key="i">{{ model }}</option>
				</select>
			</div>
		</div>
		<div class="control">
			<div class="select is-small">
				<select name="style" id="style" @change="updateVehicle($event, 'style')">
					<option value="">- Style -</option>
					<option v-bind:value="style" v-for="(style, i) in lookupState.available_styles" v-bind:key="i">{{ style }}</option>
				</select>
			</div>
		</div>
		<div class="control">
			<button :disabled="!validVehicle()" class="button is-small">Search</button>
		</div>
	</form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Vehicle } from './Vehicle';

@Component({
	computed: {
		...mapGetters(['vehicleState', 'lookupState']),
	},
})
export default class Lookup extends Vue {

	public created() {
		this.$store.dispatch('queryVehicle');
	}

	private validVehicle(): boolean {
		return this.$store.state.vehicleState.complete();
	}

	private submit() {
		const segments: string[] = [
			'vehicle',
			this.$store.state.vehicleState.year,
			this.$store.state.vehicleState.make,
			this.$store.state.vehicleState.model,
			this.$store.state.vehicleState.style,
		];
		this.$router.push({ path: `/${segments.join('/')}` });
	}

	private updateVehicle($event: any, prop: string) {
		let vehicle;
		switch (prop) {
			case 'year':
				vehicle = new Vehicle(
					$event.target.value,
					'',
					'',
					'',
				);
				break;
			case 'make':
				vehicle = new Vehicle(
					this.$store.state.vehicleState.year,
					$event.target.value,
					'',
					'',
				);
				break;
			case 'model':
				vehicle = new Vehicle(
					this.$store.state.vehicleState.year,
					this.$store.state.vehicleState.make,
					$event.target.value,
					'',
				);
				break;
			case 'style':
				vehicle = new Vehicle(
					this.$store.state.vehicleState.year,
					this.$store.state.vehicleState.make,
					this.$store.state.vehicleState.model,
					$event.target.value,
				);
				break;
			default:
				break;
		}

		this.$store.dispatch('setVehicleState', vehicle);
	}
}
</script>

<style scoped lang="scss">
@import "../main.scss";

.lookup {
	width: 100%;
	background: $tan;
	display: flex;
	flex-direction: column;
	padding: 15px 5%;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 1px 0px 5px rgb(9, 8, 8);

	& > div {
		overflow: hidden;
		margin: 5px 0;
		width: 100%;

		&:first-child {
			span{
				color: $white;
				font-size: 15px;
				font-weight: 600;
			}
		}

		& > div, & > div > select {
			width: 100%;
		}

		button {
			background-color: $black;
			transition: all 0.2s ease-in;
			color: $white;
			font-size: 13px;
			&:hover {
				background-color: $orange;
			}
		}
	}
}

@media only screen and (min-width: 1088px) {
	.lookup {
		flex-direction: row;
		padding: 15px 10% 15px 10%;

		& > div {
			margin: 0 10px;
			&:first-child {
				margin: 0;
			}
		}
	}
}

</style>
