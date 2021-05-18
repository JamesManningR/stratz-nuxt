<template>
  <main class="login">
    <accessibility-menu />
    <form class="login__form" @submit.prevent="handleSubmit()">
      <h1 class="login__title">Enter Your Steam Id</h1>
      <input
        id="steamId"
        v-model="steamId"
        class="login__input"
        type="text"
        name="steamId"
      />
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  public steamId: String = ''

  handleSubmit() {
    this.$router.push(`player/${this.steamId}`)
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;

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
