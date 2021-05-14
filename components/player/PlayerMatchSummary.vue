<template>
  <router-link
    :to="`/match/${match.id}`"
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
      <li class="player-match-summary__stat player-match-summary__kda">
        <span class="player-match-summary__kda-stat">
          <svg-icon
            class="player-match-summary__stats-icon"
            name="kill"
            title="Kills"
          />
          {{ player.kills }}
        </span>
        <span class="player-match-summary__kda-stat">
          <svg-icon
            class="player-match-summary__stats-icon"
            name="death"
            title="Deaths"
          />
          {{ player.deaths }}
        </span>
        <span class="player-match-summary__kda-stat">
          <svg-icon
            class="player-match-summary__stats-icon"
            name="assist"
            title="Assists"
          />
          {{ player.assists }}
        </span>
      </li>
      <li class="player-match-summary__stat">
        <svg-icon class="player-match-summary__stats-icon" name="gpm" />
        <span>GPM: {{ player.goldPerMinute }}</span>
      </li>
      <li class="player-match-summary__stat">
        <svg-icon class="player-match-summary__stats-icon" name="star" />
        <span>XPM: {{ player.experiencePerMinute }}</span>
      </li>
      <li class="player-match-summary__stat">
        <lane-icon
          class="player-match-summary__stats-icon"
          :lane="player.lane"
          :is-radiant="player.isRadiant"
        />
        <span>Lane: {{ playerLane }}</span>
      </li>
      <li class="player-match-summary__stat">
        <svg-icon class="player-match-summary__stats-icon" name="gpm" />
        <span>Role: {{ playerRole }}</span>
      </li>
    </ul>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { MatchType } from '@altgen/stratz-types'

import Vue from 'vue'

@Component
export default class MatchSummaryCard extends Vue {
  @Prop({ type: Object as () => MatchType })
  public match!: MatchType

  // TODO: Dry this out, babel wont let me use the right map, so figure this out when you can
  private RoleMap = ['Core', 'Light Support', 'Hard Support', 'Unknown']

  // TODO: Dry this out, babel wont let me use the right map, so figure this out when you can
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
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.15em 0.15em 1em 1em;
  background-color: $background--secondary;
  border-top: solid 1em;
  border-color: $green;
  box-shadow: $shadow;
  transition: transform 0.05s ease-out, box-shadow 0.05s ease-out;
  overflow: hidden;

  @include bp(25rem) {
    flex-direction: row;
  }

  &:hover {
    cursor: pointer;
    transform: translate(-0.1em, -0.1em);
    box-shadow: $shadow--raised;
  }

  &:active {
    transform: translate(0.1em, 0.1em);
    box-shadow: 0 0 0 $shadow-color;
  }

  &--loss {
    border-color: $red;
  }

  &__team {
    @include square(2.5em);

    position: absolute;
    top: 0;
    left: 0;
    filter: drop-shadow(0 0 0.3em rgba(0, 0, 0, 0.5));
  }

  &__hero {
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0.2em 0.3em $shadow-color;

    @include bp(25rem) {
      box-shadow: 0.2em 0 0.3em $shadow-color;
      flex-direction: row;
      max-width: 14em;
    }
    @include bp(100rem) {
      max-width: unset;
    }
  }

  &__stats {
    padding: 1em;
    flex-grow: 1;

    &-icon {
      @include square(1.2em);
    }
  }

  &__stat {
    margin-bottom: 0.5em;
  }

  &__kda {
    display: flex;
    flex-direction: column;
    @include bp(12.5rem) {
      display: inline;
    }
  }

  &__kda-stat {
    @include bp(12.5rem) {
      &:nth-child(-n + 2) {
        &::after {
          content: '/';
        }
      }
    }
  }
}
</style>
