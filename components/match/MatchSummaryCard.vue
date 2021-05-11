<template>
  <li class="match-summary">
    <img
      class="match-summary__hero-img"
      :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${match.players[0].hero.shortName}_sb.png`" 
      :alt="match.players[0].hero.displayName"
    />
    <h3 class="match-summary__hero-name">{{match.players[0].hero.displayName}}</h3>
    
  </li>
</template>

<script lang="ts">
import { MatchType } from '@altgen/stratz-types'

import Vue from 'vue'

export default Vue.extend({
  props: {
    match: {
      type: Object as () => MatchType,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.match-summary {
  background-color: #092;

  &--loss {
    background-color: #955;
  }
}
</style>
