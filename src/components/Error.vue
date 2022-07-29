<template>
  <div id="error">
    <div class="error-container">
      <h1>Ooops</h1>
      <p>Your age is over our accepted limit.</p>
      <p>We are sorry but we cannot insure you now</p>
      <router-link to="/">
        <button class="btn-ok">Ok :(</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
}

.error-container {
  text-align: center;
  padding: 2rem;
}

.btn-ok {
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border-radius: 7.5px;
  width: 18rem;
  font-size: 1rem;
}
</style>
