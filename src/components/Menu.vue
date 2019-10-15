<template>
	<div id="navbar-menu" class="navbar-menu" v-bind:class="{'is-active': showBurger}">
		<div class="navbar-start">
			<div class="navbar-item">
				<router-link to="/categories">
					<span v-on:click.stop.prevent="toggleFlyout">Shop</span>
				</router-link>
			</div>
			<div class="navbar-item">
				<router-link to="/contact">Contact/Find Us</router-link>
			</div>
			<div class="navbar-item">
				<router-link to="/about">About</router-link>
			</div>
		</div>
		<div class="field navbar-item phone">
			<a href="tel:17158339010">
				<i class="fas fa-phone"></i>
				<div>
					<span>Call Anytime</span>
					<span>(715) 833 - 9010</span>
				</div>
			</a>
		</div>
		<div class="field navbar-item">
			<a href="tel:17158339010">
				<i class="fas fa-phone"></i>
			</a>
			<form v-on:submit.stop.prevent="handleSearch" class="control has-icons-left has-icons-right">
				<input v-model="searchField" class="input" type="seach" placeholder="Search">
				<span class="icon is-small is-left">
					<i class="fas fa-search"></i>
				</span>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
	computed: {
		...mapGetters(['showBurger']),
	},
})
export default class Menu extends Vue {
	@Prop() private search!: string;

	private data() {
		return {
			searchField: '',
		};
	}

	private toggleFlyout(event: any) {
		this.$store.dispatch('toggleFlyout');
	}

	private handleSearch(event: any) {
		event.preventDefault();
		this.$router.push(`/search/${this.$data.searchField}`);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../main.scss";
$animate: all 0.1s ease-in-out;
$orange: rgb(250, 132, 15);
$darkOrange: rgb(189, 96, 2);
$black: rgb(9, 8, 8);
.navbar {
	flex-grow: 1;

	.navbar-menu {
		padding: 1px 20px;
		margin: 0;
		.navbar-start {
			align-items: center;

			.navbar-item {
				text-align: center;
				margin: 0 15px;
				padding: 0 5px;
				transition: $animate;
				position: relative;
				background-color: transparent;
				
				& > a {
					color: $black;
				}

				@media screen and (min-width: 992px) {
					font-size: 19px;
				}

				&:before,
				&:after {
					content: "";
					position: absolute;
					bottom: -5px;
					width: 0px;
					height: 3px;
					margin: 1px 0 0;
					transition: $animate;
					transition-duration: 0.3s;
					opacity: 0;
					left: 0;
					background-color: desaturate($orange, 40%);
				}

				&.selected:before,
				&.selected:after {
					background-color: $black;
				}

				&:hover,
				&.selected {
					cursor: pointer;
					color: $black;

					&:before,
					&:after {
						width: 100%;
						opacity: 1;
					}
				}

				.shop-category {
					display: none;
				}
			}
		}

		.navbar-item.field {
			&.phone {
				border-left: 1px solid $gray;
				border-right: 1px solid $gray;
				margin-bottom: 0;
				font-size: 24px;
				display: none;

				& > a {
					width: 100%;
					height: 100%;
					color: lighten($black, 50%);
					transition: all .2s ease-in;
					display: flex;
					align-items: center;

					&:hover {
						color: $black;
						text-shadow: 0 1px 1px $gray;
						// font-weight: 600;
					}

					& > svg {
						transform: rotateY(180deg);
					}

					div {
						display: flex;
						flex-direction: column;
						align-items: center;
						> span:first-child {
							font-weight: 500;
						}
					}
				}

				span {
					margin-left: 10px;
					font-size: 16px;
				}
			}

			&:last-child {
				margin: 10px 0;
				padding: 0;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				& > a {
					color: $black;

					svg {
						transform: rotateY(180deg);
					}
				}
			}
		}
	}
}

@media only screen and (min-width: 1088px) {
	.navbar {
		.navbar-menu {
			.navbar-item.field {
				margin-right: 25px;
				&.phone {
					display: block;
				}

				&:last-child {
					a {
						display: none;
					}
				}
			}
		}
	}
}
</style>
