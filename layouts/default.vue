<template>
  <div>
    <!-- hamburger icon inside this component toggles sidenav (only on mobile) -->
    <app-the-header @sidenavToggle="displaySidenav = !displaySidenav">
    </app-the-header>
    <app-the-sidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    >
    </app-the-sidenav>
    <Nuxt />
  </div>

</template>

<script>
import TheHeader from '../components/navigation/TheHeader';
import TheSidenav from '../components/navigation/TheSidenav';

export default {
  components: {
    'app-the-header': TheHeader,
    'app-the-sidenav': TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
