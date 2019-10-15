<template>
	<div class="about">
		<div class="banner"></div>
		<div class="bio">
			<p>
			Our business is hitches, and HITCHESDIRECT.com is very proud to offer the full line of quality, made in the USA CURT towing products at Factory Direct Prices.
			Our technicians have over 24yrs. of experience selling and installing receiver hitches, gooseneck hitches, weight distribution hitches, electrical components, ball mounts, trailer balls, cargo carriers, bike racks, and anything else related to towing.
			We are also to rated a ⭐️⭐️⭐️⭐️⭐️ dealer by our customers. Check out our reviews on line.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	components: {},
})
export default class About extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
	background-image: url("/img/storefront.jpg");
	width: 100%;
	min-height: 600px;
	background-position: center;
	background-size: cover;
}

.bio {
	margin: 8rem auto;
	width: 80%;
	p {
		font-size: 1.2rem;
		font-weight: 600;
	}
}
</style>
