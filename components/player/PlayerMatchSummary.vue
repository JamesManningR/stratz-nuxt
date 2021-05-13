<template>
  <li
    class="player-match-summary"
    :class="{
      'player-match-summary--loss': !player.isVictory,
    }"
  >
    <svg-icon
      class="player-match-summary__team"
      :name="playerTeam.toLowerCase()"
      :title="`Player played on the ${playerTeam} team`"
    />

    <img
      class="player-match-summary__hero"
      :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${player.hero.shortName}_full.png`"
      :alt="`Played as ${player.hero.displayName}`"
    />

    <ul class="player-match-summary__stats">
      <li class="player-match-summary-stat">
        <span class="player-match-summary__kda-stat">
          <svg-icon
            class="player-match-summary__stats-icon"
            name="kill"
            title="Kills"
          />
          {{ player.kills }}
        </span>
        /
        <span class="player-match-summary__kda-stat">
          <svg-icon
            class="player-match-summary__stats-icon"
            name="death"
            title="Deaths"
          />
          {{ player.deaths }}
        </span>
        /
        <span class="player-match-summary__kda-stat">
          <svg-icon
            class="player-match-summary__stats-icon"
            name="assist"
            title="Assists"
          />
          {{ player.assists }}
        </span>
      </li>
      <li>GPM: {{ player.goldPerMinute }}</li>
      <li>XPM: {{ player.experiencePerMinute }}</li>
      <li>Lane: {{ playerLane }}</li>
      <li>Role: {{ playerRole }}</li>
    </ul>
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
.player-match-summary {
  max-width: 100%;
  display: flex;
  position: relative;
  border-radius: 0 0 1em 1em;
  flex-direction: row;
  background-color: #efefef;
  border-top: solid 1em;
  border-color: #092;

  &--loss {
    border-color: #955;
  }

  &__team {
    @include square(2em);

    position: absolute;
    top: 0.15em;
    left: 0.15em;
  }

  &__hero {
    flex-grow: 1;
    height: 8em;
    object-fit: cover;
  }

  &__stats {
    padding: 1em;

    &-icon {
      @include square(1em);
    }
  }
}
</style>
