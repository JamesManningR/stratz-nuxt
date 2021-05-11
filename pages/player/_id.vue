<template>
  <main>
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
          :match="match"
        >
        </match-summary-card>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  async fetch({ params, store }) {
    await store.dispatch('fetchProfile', params.id)
  },
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
