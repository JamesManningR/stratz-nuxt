<template>
  <div class="container">
    <button class="button--green" @click="fetchProfile()">Fetch Matches</button>
    <button class="button--green" @click="logState()">Log State</button>
    <div v-if="profile.id != 0" class="profile">
      <img
        :src="`https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/${profile.steamAccount.avatar}`" 
        :alt="profile.steamAccount.name"
      />
      <h1>{{ profile.steamAccount.name }}</h1>
      <ul class="matches">
        <match-summary-card 
          v-for="match in profile.matches"
          :key="match.id"
          :class="{
            'match-summary--loss':
              match.didRadiantWin != match.players[0].isRadiant,
          }"
          :match="match"
        >
        </match-summary-card>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['profile']),
  },
  methods: {
    logState() {
      console.log(this.profile)
    },
    ...mapActions(['fetchProfile']),
  },
})
</script>

<style scoped lang="scss">
.match {
  border: 1px solid #CCC;
  border-collapse: collapse;
}
</style>
