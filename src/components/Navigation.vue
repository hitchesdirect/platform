<template>
	<nav class="navbar navigation" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src="../assets/logo.png">
			</a>
			<a
			role="button"
			class="navbar-burger burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbar-menu"
			@click="toggleMenu()"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<Menu/>
	</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

@Component({
	components: {
		Menu,
	},
})
export default class Navigation extends Vue {
	@Prop() private msg!: string;

	public toggleMenu() {
		this.$store.dispatch('toggleMenu');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$animate: all 0.2s ease-in-out;
$orange: #fa860f;
$black: rgb(9, 8, 8);

.navbar {
	box-shadow: 1px 0px 5px $black;
	width: 100%;
	z-index: 100;

	.navbar-brand {
		padding: 10px;
		align-items: center;

		img {
			max-height: none;
		}
	}
}
</style>
