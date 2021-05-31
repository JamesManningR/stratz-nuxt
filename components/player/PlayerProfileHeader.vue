<template>
  <section class="profile">
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
        title="Player is subscribed to dota plus"
        name="dota-plus"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { PlayerType } from '@altgen/stratz-types'

@Component
export default class PlayerProfileHeader extends Vue {
  @Prop()
  public profile!: PlayerType
}
</script>

<style scoped lang="scss">
$img-overlap: 2em;

.profile {
  display: grid;
  grid-template-areas: 'img name' 'img meta';
  grid-template-columns: 7em 1fr;
  margin-top: $img-overlap + 1em;
  background-color: $background--secondary;
  padding: 0.5em 1em;

  &__img {
    grid-area: img;
    margin-top: -$img-overlap;
    margin-right: 1em;
    border-radius: 50%;
    border: 0.25em solid $background--secondary;
    @include square(6em);
  }
  &__name {
    grid-area: name;
    font-size: 1.25em;
    margin-top: 0;
    margin-bottom: 0.1em;
  }
  &__meta {
    grid-area: meta;
    display: flex;
  }
  &__meta-icon {
    @include square(1.5em);

    margin-right: 0.5em;
  }
}
</style>
