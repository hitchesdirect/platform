<template>
	<div class="footer">
		<div class="logo">
			<img src="../assets/logo.png" alt="Hitches Direct">
			<div class="map">
				<iframe width="300" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=JC%20Auto%20Sales&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
			</div>
		</div>
		
		<div class="info">
			<div class="menu">
				<div class="contact">
					<a href="https://www.facebook.com/JC-Auto-Sales-Service-138150379705587/">
						<i class="fab fa-facebook-square"></i>
					</a>
					<a href="mailto:hitchesdirect@gmail.com">
						<i class="far fa-envelope"></i>
					</a>
					<a href="https://www.youtube.com/user/JCAutoSales01?feature=watch">
						<i class="fab fa-youtube"></i>
					</a>
				</div>
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
				<router-link to="/contact">Contact</router-link>
			</div>
			<div class="stats">
				<div class="address">
					<p>2124 S Hastings Way</p>
					<p>Eau Claire, WI 54701</p>
				</div>
				<a href="tel:17158339010">(715) 833 - 9010</a>
			</div>
		</div>
		
		<script type="application/ld+json" v-text="orgLD"></script>
		<script type="application/ld+json" v-text="logoLD"></script>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
	private data() {
		return {
			logoLD: `{
				"@context": "https://schema.org",
				"@type": "Organization",
				"url": "http://www.hitchesdirect.com",
				"logo": "http://www.hitchesdirect.com/img/logo.png"
			}`,
			orgLD: `{
				"@context": "https://schema.org",
				"@type": "AutoReport",
				"@id": "http://www.hitchesdirect.com",
				"name": "Hitches Direct",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "2124 S Hastings Way",
					"addressLocality": "Eau Claire",
					"addressRegion": "WI",
					"postalCode": "54701",
					"addressCountry": "US"
				},
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": 44.7968801,
					"longitude": -91.464776
				},
				"url": "http://www.hitchesdirect.com",
				"telephone": "+17158339010",
				"openingHoursSpecification": [
					{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
						],
						"opens": "08:00",
						"closes": "17:00"
					},
					{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": "Saturday",
						"opens": "8:00",
						"closes": "12:00"
					}
				]
			}`,
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../main.scss";
.footer {
	background-color: #41413d;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 3rem 4rem 6rem;

	img {
		width: 200px;
	}
	
	a {
		color: $white;
	}

	.logo {
		margin: auto 0;
		flex-grow: 1;
		max-width: 40%;

		.map{
			overflow:hidden;
			padding-bottom:56.25%;
			position:relative;
			height:0;
			
			iframe{
				left:0;
				top:0;
				height:100%;
				width:100%;
				position:absolute;
			}
		}
	}

	.info {
		.menu {
			margin-top: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			padding: 20px 0;
			border-bottom: 1px solid $white;
			margin-bottom: 3rem;
			align-items: baseline;

			.contact {
				display: flex;
				justify-content: space-evenly;
				flex-direction: row;
				font-size: 28px;

				a {
					padding: 0 5px;
				}
			}

			& > a {
				padding: 0 5px;
			}
		}

		.stats {
			text-align: right;
			color: white;
			font-size: 16px;

			& > a {
				font-size: 20px;
			}
		}
	}
}

@media only screen and (min-width: 1088px) {
	.footer {
		flex-direction: row;

		.info {
			width: 40%;

			.menu {
				margin-top: 0;

				.contact {
					width: 30%;
				}
			}
		}
	}
}
</style>
