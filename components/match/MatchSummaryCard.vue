<template>
  <li
    class="match-summary"
    :class="{
      'match-summary--loss': match.didRadiantWin != player.isRadiant,
    }"
  >
    <img
      class="match-summary__hero-img"
      :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${player.hero.shortName}_sb.png`"
      :alt="player.hero.displayName"
    />
    <h3 class="match-summary__hero-name">
      {{ player.hero.displayName }}
    </h3>
    <span class="match-summary__player-team">
      <svg-icon
        class="match-summary__team-icon"
        :name="playerTeam.toLowerCase()"
      />
      {{ playerTeam }}
    </span>
    <h4 lass="match-summary__winning-team">{{ winningTeam }} Win</h4>
  </li>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { MatchType } from '@altgen/stratz-types'

import Vue from 'vue'

@Component
export default class MatchSummaryCard extends Vue {
  @Prop({ type: Object as () => MatchType })
  public match!: MatchType

  get player() {
    return this.match.players[0]
  }

  get matchWon() {
    return this.match.didRadiantWin !== this.player.isRadiant
  }

  get winningTeam() {
    return this.match.didRadiantWin ? 'Radiant' : 'Dire'
  }

  get playerTeam() {
    return this.player.isRadiant ? 'Radiant' : 'Dire'
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
