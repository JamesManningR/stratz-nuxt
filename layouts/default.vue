<template>
  <div class="app">
    <app-header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__layout {
  height: 100vh;
}

main {
  height: 100%;
}

input {
  padding: 1em;
  appearance: none;
  background-color: #0008;
  border: none;
  border-radius: 1em;
}

button {
  padding-right: 2.5em;
  padding-left: 2.5em;
  appearance: none;
  background-color: #cb5857;
  border: none;
  border-radius: 1em;
}

.sr-only {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  position: absolute;
  border: 0;
}
</style>
