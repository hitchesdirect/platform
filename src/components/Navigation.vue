<template>
  <nav class="navbar navigation" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo.png">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <Menu />
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

@Component({
  components: {
    Menu,
  },
})
export default class Navigation extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$animate: all 0.2s ease-in-out;
$orange: #fa860f;
.navbar {
  .navbar-brand {
    padding: 10px;

    img {
      max-width: 275px;
      max-height: none;
    }
  }

  .navbar-menu {
    margin: 0 10px 0 50px;
    .navbar-start {
      align-items: center;
    }

    .navbar-item {
      font-size: 5vw;
      text-align: center;
      margin: 0 10px;
      padding: 0 5px;
      transition: $animate;
      position: relative;

      @media screen and (min-width: 992px) {
        font-size: 24px;
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
