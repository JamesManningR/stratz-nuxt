<template>
  <div class="app">
    <app-header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  background: #efefef;
  color: $text;
  font-family: font-family('body');
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: font-family('heading');
}

h2,
h3,
h4,
h5,
h6 {
  font-family: font-family('subheading');
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

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

section {
  padding: 0 1em;
}

svg {
  @include square(1em);
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
