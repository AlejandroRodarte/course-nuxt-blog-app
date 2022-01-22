<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'check-token'
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
