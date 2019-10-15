declare module 'vue-parallaxy' {
	import Vue from 'vue';
	export default class Parallax extends Vue {
		public message: string;
		public parallax: boolean;
		public speedFactor: number;
		public fixed: boolean;
		public breakpoint: string;
		public sectionHeight: number;
		public sectionClass: string;
		public containerClass: string;
		public parallaxClass: string;
		public fixedClass: string;
		public direction: string;
	}
}

declare module 'vue-carousel';
