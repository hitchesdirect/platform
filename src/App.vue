<template>
  <div id="app">
    <Navigation />
    <!-- <Lookup /> -->
  </div>
</template>

<style lang="scss">
@import '~bulma/bulma';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #090808;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue'; // @ is an alias to /src
import Lookup from '@/components/Lookup.vue'; // @ is an alias to /src

@Component({
  components: {
    Navigation,
    Lookup,
  },
})
export default class App extends Vue {}
</script>
