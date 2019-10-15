import { Component, Prop, Vue } from 'vue-property-decorator';

interface Path {
	Scheme: string;
	Host: string;
	Path: string;
}

interface Image {
	sort: string;
	size: string;
	path: Path;
}

@Component
export default class ProductImage extends Vue {
	@Prop() private images!: object[];
	@Prop() private alt!: string;

	private forType(sortOrder: string[], sizeOrder: string[]): string {
		if (sortOrder === undefined || sortOrder.length === 0) {
			return '';
		}
		if (sizeOrder === undefined || sizeOrder.length === 0) {
			return '';
		}

		const sorted = this.images.filter((i: any) => {
			if (i.sort === undefined) {
				return false;
			}

			return i.sort === sortOrder[0];
		});
		if (sorted.length === 0) {
			sortOrder.shift();
			return this.forType(sortOrder, sizeOrder);
		}

		const sized = sorted.filter((i: any) => {
			if (i.size === undefined) {
				return false;
			}

			return i.size === sizeOrder[0];
		});
		if (sized.length === 0) {
			sizeOrder.shift();
			return this.forType(sortOrder, sizeOrder);
		}

		const s: any = sized[0];
		const img: Image = {
			sort: s.sort,
			size: s.size,
			path: {
				Scheme: s.path.Scheme,
				Host: s.path.Host,
				Path: s.path.Path,
			},
		};

		return `${img.path.Scheme}://${img.path.Host}${img.path.Path}`;
	}

	private render() {
		if (this.images === undefined || this.images === null) {
			return null;
		}

		return <img alt={this.alt} src={this.forType(['a'], ['Grande'])} />;
	}
}
