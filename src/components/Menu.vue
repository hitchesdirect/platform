<template>
  <nav class="navbar navigation" role="navigation" aria-label="main navigation">
     <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          Trailer Hitches
        </router-link>
        <router-link to="/" class="navbar-item selected">
          Ball Mounts
        </router-link>
        <router-view/>
      </div>
      <div class="field navbar-item">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="seach" placeholder="Search">
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
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
$animate: all 0.1s ease-in-out;
$orange: rgb(250,132,15);
$darkOrange: rgb(189,96,2);
$black: rgb(9, 8, 8);
.navbar {
  flex-grow: 1;

  .navbar-menu {
    padding: 1px 20px;
    .navbar-start {
      align-items: center;
    }

    .navbar-item {
      text-align: center;
      margin: 0 15px;
      padding: 0 5px;
      transition: $animate;
      position: relative;
      background-color: transparent;

      @media screen and (min-width: 992px) {
        font-size: 15px;
      }
      &:before, &:after {
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

      &.selected:before,&.selected:after {
        background-color: $black;
      }

      &:hover,&.selected {
        cursor: pointer;
        color: $black;

        &:before,&:after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
