<template>
  <li
    class="match-summary"
    :class="{
      'match-summary--loss': match.didRadiantWin != match.players[0].isRadiant,
    }"
  >
    <img
      class="match-summary__hero-img"
      :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${match.players[0].hero.shortName}_sb.png`"
      :alt="match.players[0].hero.displayName"
    />
    <h3 class="match-summary__hero-name">
      {{ match.players[0].hero.displayName }}
    </h3>
    <h4>{{ playerTeam }} Team</h4>
    <h4>{{ winningTeam }} Win</h4>
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
  computed: {
    matchWon() {
      return this.match.didRadiantWin !== this.match.player.isRadiant
    },
    winningTeam() {
      return this.match.didRadiantWin ? 'Radiant' : 'Dire'
    },
    playerTeam() {
      return this.match.players[0].isRadiant ? 'Radiant' : 'Dire'
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
