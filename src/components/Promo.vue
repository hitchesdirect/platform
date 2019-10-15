<template>
	<div class="promo">
		<img src="/img/white-curt.png" alt="CURT Manufacturing Logo">
		<p>Factory Direct Pricing! Same day install!</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	components: {},
})
export default class Navigation extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$orange: #fa860f;
$black: rgb(9, 8, 8);

.promo {
	box-shadow: 1px -4px 1px $black;
	width: 100%;
	z-index: 100;
	background: $orange;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	img, p {
		height: 30px;
		margin: 0 .7rem;
		display: block;
	}

	p {
		background-color: $black;
		font-size: 22px;
		color: transparent;
		text-shadow: 2px 2px 3px rgba(9,9,8,0.5);
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
	}
}
</style>
