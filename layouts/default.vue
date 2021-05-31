<template>
  <div class="app theme--light" :class="themeClasses">
    <app-header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  computed: mapGetters('accessibility', ['themeClasses']),
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import '~/assets/scss/init/theming';

body {
  background: $background;
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

input[type="checkbox"] {
  padding: 1rem;
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

svg {
  @include square(1em);

  fill: currentColor;
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
