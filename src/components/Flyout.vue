<template>
	<transition name="fade">
		<div v-show="shouldFlyout" class="flyout">
			<div class="category" v-for="cat in parentCategories" :key="cat.id">
				<router-link :key="cat.id" :to="`/categories/${cat.id}/${cat.title}`">{{ cat.title }}</router-link>
				<ul v-if="cat.children.length > 0">
					<li v-bind:key="child.id" v-for="child in cat.children">
						<router-link :key="child.id" :to="`/categories/${child.id}/${child.title}`">{{ child.title }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
	computed: {
		...mapGetters(['parentCategories', 'shouldFlyout']),
  },
})
export default class Flyout extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../main.scss";
$animate: all 0.1s ease-in-out;

.fade-enter-active,
.fade-leave-active {
  // transition: opacity .5s;
  transform: scaleY(1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
  transform: scaleY(0);
}

.flyout {
  padding: 35px 50px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  background-color: white;
  z-index: 99;
  transition: all 0.25s ease-in-out;
  transform-origin: left top;

  & > div {
    margin: 15px;

    a {
      color: $black;
      position: relative;
      font-weight: 600;
      display: block;
      margin-bottom: 20px;

      @media screen and (min-width: 992px) {
        font-size: 15px;
      }

      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 0px;
        height: 1px;
        margin: 1px 0 0;
        transition: $animate;
        transition-duration: 0.75s;
        opacity: 0;
        left: 0;
        background-color: desaturate($black, 40%);
      }

      &:hover {
        cursor: pointer;

        &:before,
        &:after {
          width: 100%;
          opacity: 1;
        }
      }
    }

    & > ul {
      @media screen and (min-width: 992px) {
        max-width: 200px;
      }

      & > li > a {
        display: inline-block;
        margin-bottom: 5px;
        font-weight: normal;
      }
    }
  }
}
</style>
