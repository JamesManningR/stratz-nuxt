<template>
  <section class="matches">
    <h2>Matches</h2>
    <ul class="match-summaries">
      <player-match-summary
        v-for="match in matches"
        :key="match.id"
        :match="match"
<<<<<<< HEAD
=======
        class="match-summaries__summary"
>>>>>>> dev
      >
      </player-match-summary>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MatchType } from '@altgen/stratz-types'

@Component
export default class PlayerProfileGrid extends Vue {
  @Prop()
  public matches!: MatchType[]
}
</script>

<style lang="scss" scoped>
.match-summaries {
<<<<<<< HEAD
=======
  padding: 1.5em 1em;
>>>>>>> dev
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 100%;
<<<<<<< HEAD
=======
  overflow-y: scroll;

  @include bp(20rem) {
    display: flex;
    flex-direction: row;
  }
>>>>>>> dev

  @include bp(25rem) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  }
<<<<<<< HEAD
=======

  &__summary {
    flex-basis: 25em;
    flex-shrink: 0;
    @include bpb(20rem, 25rem) {
      max-width: 15em;
    }
  }
>>>>>>> dev
}
</style>
