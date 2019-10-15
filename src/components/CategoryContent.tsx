import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryContent extends Vue {
	@Prop() private content!: object[];

	private render() {
		if (this.content == null) {
			return null;
		}

		return <img src='/img/snowmobile.jpg' />;
	}
}
