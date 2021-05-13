<template>
  <main>
    <section v-if="profile.steamAccount" class="profile">
      <img
        class="profile__img"
        :src="`https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/${profile.steamAccount.avatar}`"
        :alt="profile.steamAccount.name"
      />
      <h1 class="profile__name">{{ profile.steamAccount.name }}</h1>
      <div class="profile__meta">
        <a :href="profile.steamAccount.profileUri">
          <svg-icon class="profile__meta-icon" name="steam" />
        </a>
        <svg-icon
          v-if="profile.steamAccount.isDotaPlusSubscriber"
          class="profile__meta-icon"
          name="dota-plus"
        />
      </div>
    </section>
    <section class="matches">
      <ul class="match-summaries">
        <match-summary-card
          v-for="match in profile.matches"
          :key="match.id"
          :match="match"
        >
        </match-summary-card>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Component } from 'vue-property-decorator'
import { PlayerType } from '@altgen/stratz-types'

@Component({
  computed: mapState(['profile']),
  methods: mapActions(['fetchProfile']),

  async fetch({ params, store }) {
    await store.dispatch('fetchProfile', params.id)
  },
})
export default class PlayerPage extends Vue {
  public profile!: PlayerType
}
</script>

<style scoped lang="scss">
$top-margin: 3em;

.profile {
  display: flex;
  margin-top: $top-margin;
  background-color: $background--secondary;
  padding: 0.5em 1em;
  &__img {
    margin-top: -$top-margin;
    margin-right: 1em;
    border-radius: 50%;
    @include square(5em);
  }
  &__name {
    font-size: 1.25em;
    margin-top: 0;
  }
  &__meta {
    display: flex;
  }
  &__meta-icon {
    @include square(1.5em);
  }
}
</style>
