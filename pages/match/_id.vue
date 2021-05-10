<template>
  <div class="container">
    <button class="button--green" @click="fetchMatch()">Fetch Matches</button>
    <button class="button--green" @click="logState()">Log State</button>
    <table v-if="matches.match" class="match">
      <thead>
        <tr>
          <th>Img</th>
          <th>Player</th>
          <th>Hero</th>
          <th>Level</th>
          <th>Networth</th>
          <th>GPM</th>
          <th>Kills</th>
          <th>Deaths</th>
          <th>Assists</th>
        </tr>
      </thead>
      <tbody>
        <match-player-card
          v-for="player in matches.match.players"
          :key="player.steamAccount.id"
          :player="player"
        >
        </match-player-card>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['matches']),
  },
  methods: {
    logState() {
      console.log(this.matches)
    },
    ...mapActions('matches', ['fetchMatch']),
  },
})
</script>

<style scoped lang="scss">
.match {
  border: 1px solid #CCC;
  border-collapse: collapse;
}
</style>
