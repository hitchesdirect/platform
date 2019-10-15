import { Component, Prop, Vue } from 'vue-property-decorator';

interface Path {
	Scheme: string;
	Host: string;
	Path: string;
}

interface Brand {
	id: number;
	logo: Path;
}

@Component
export default class BrandImage extends Vue {
	@Prop() private brand!: Brand;

	private render() {
		if (this.brand === undefined || this.brand === null) {
			return null;
		}

		if (this.brand.logo === undefined || this.brand.logo === undefined) {
			return null;
		}

		let path = '';
		if (this.brand.id === 1) {
			path = `${this.brand.logo.Scheme}://www2.curtmfg.com${this.brand.logo.Path}`;
		} else {
			path = `${this.brand.logo.Scheme}://${this.brand.logo.Host}${this.brand.logo.Path}`;
		}
		return <img style='width:30%' src={path} />;
	}
}
