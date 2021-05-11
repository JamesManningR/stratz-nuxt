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
import { Component, Prop } from 'vue-property-decorator'
import { MatchType } from '@altgen/stratz-types'

import Vue from 'vue'

@Component()
export default class MatchSummaryCard extends Vue {
  @Prop({ type: Object as () => MatchType })
  public match!: MatchType

  get matchWon() {
    return this.match.didRadiantWin !== this.match.players[0].isRadiant
  }

  get winningTeam() {
    return this.match.didRadiantWin ? 'Radiant' : 'Dire'
  }

  get playerTeam() {
    return this.match.players[0].isRadiant ? 'Radiant' : 'Dire'
  }
}
</script>

<style scoped lang="scss">
.match-summary {
  background-color: #092;

  &--loss {
    background-color: #955;
  }
}
</style>
