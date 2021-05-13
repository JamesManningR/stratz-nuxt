<template>
  <li
    class="match-summary"
    :class="{
      'match-summary--loss': !player.isVictory,
    }"
  >
    <span class="match-summary__player-team">
      <svg-icon
        class="match-summary__team-icon"
        :name="playerTeam.toLowerCase()"
      />
      {{ playerTeam }}
    </span>

    <div class="match-summary__hero">
      <img
        class="match-summary__hero-img"
        :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${player.hero.shortName}_sb.png`"
        :alt="player.hero.displayName"
      />
      <h3 class="match-summary__hero-name">
        {{ player.hero.displayName }}
      </h3>
    </div>

    <div class="match-summary__stats">
      <ul>
        <li>
          KDA: {{ player.kills }} / {{ player.deaths }} / {{ player.assists }}
        </li>
        <li>GPM: {{ player.goldPerMinute }}</li>
        <li>GPM: {{ player.goldPerMinute }}</li>
        <li>Lane: {{ playerLane }}</li>
        <li>Role: {{ playerRole }}</li>
      </ul>
    </div>

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

  private RoleMap = ['Core', 'Light Support', 'Hard Support', 'Unknown']
  private LaneMap = ['Safe', 'Mid', 'Off']

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

  get playerLane() {
    return this.LaneMap[this.player.lane - 1]
  }

  get playerRole() {
    return this.RoleMap[this.player.role]
  }
}
</script>

<style scoped lang="scss">
.match-summary {
  display: grid;
  grid-template-areas: 'team hero';
  background-color: #092;

  &--loss {
    background-color: #955;
  }

  &__team {
    grid-area: team;
  }

  &__hero {
    grid-area: hero;
    &-img {
      display: inline;
    }
    &-name {
      display: inline;
    }
  }
}
</style>
