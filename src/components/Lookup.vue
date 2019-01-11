<template>
  <nav class="navbar navigation" role="navigation" aria-label="main navigation">
     <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          Shop CURT
          <i class="fas fa-caret-down"></i>
        </router-link>
        <router-view/>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "compass/css3";
@import "compass/css3/animation";
$animate: all 0.2s ease-in-out;
$orange: rgb(250,132,15);
$darkOrange: rgb(220, 112, 4);
.navbar {

  .navbar-menu {
    // @include filter-gradient(vertical, #fa840f, #bd6002); // IE6-9
    @include background-image(linear-gradient(top, $orange 0%,$orange 90%,$darkOrange 100%));
    border-top: 1px solid darken($orange, 10%);
    border-bottom: 1.2px solid darken($darkOrange, 30%);
    padding: 10px 20px;
    .navbar-start {
      align-items: center;
    }

    .navbar-item {
      font-size: 3vw;
      text-align: center;
      margin: 0;
      padding: 0 5px;
      transition: $animate;
      position: relative;

      @media screen and (min-width: 992px) {
        font-size: 16px;
      }

      &:before, &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 0px;
        height: 5px;
        margin: 5px 0 0;
        transition: $animate;
        transition-duration: 0.75s;
        opacity: 0;
        left: 0;
        background-color: desaturate($orange, 40%);
      }

      &:hover {
        cursor: pointer;

        &:before,&:after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
