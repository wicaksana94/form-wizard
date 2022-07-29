<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(247, 247, 247);
  height: 100vh;
}

.swal2-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fadein {
  animation-name: fadeInWithOpacity;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  opacity: 1;
}

@keyframes fadeInWithOpacity {
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
}
</style>
