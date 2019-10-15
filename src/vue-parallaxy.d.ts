declare module 'vue-parallaxy' {
    import Vue from 'vue';
    export default class Parallax extends Vue {
        message: string;
        parallax: boolean;
        speedFactor: number;
        fixed: boolean;
        breakpoint: string;
        sectionHeight: number;
        sectionClass: string;
        containerClass: string;
        parallaxClass: string;
        fixedClass: string;
        direction: string;
    }
}

declare module 'vue-carousel';