<template>
  <main class="login">
    <form class="login__form">
      <h1 class="login__title">Enter Your Steam Id</h1>
      <input id="steamId" class="login__input" type="text" name="steamId" />
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    178.2deg,
    rgba(118, 8, 23, 1) 10.9%,
    rgba(158, 12, 33, 1) 62.6%
  );

  &__form {
    display: flex;
    padding: 2rem 5rem;
    flex-wrap: wrap;
    background-color: #4b4b4b;
  }

  &__title {
    margin-bottom: 1em;
    flex-basis: 100%;
  }

  &__input {
    flex-grow: 1;
  }
}
</style>
