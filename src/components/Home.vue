<template>
  <div id="greeting" class="fadein">
    <div class="greeting-container">
      <h1>Hello There!</h1>
      <p>Let's buy some insurance. It is going to take only a few steps</p>
      <router-link to="/form">
        <button class="btn-start">Start</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#greeting {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
}

.greeting-container {
  text-align: center;
  padding: 2rem;
}

.btn-start {
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border-radius: 7.5px;
  width: 10rem;
  font-weight: 600;
}
</style>
