<template>
  <tr class="match-player" :class="{ 'match-player--dire': player.isRadiant }">
    <td>
      <img
        class="match-player__img"
        :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${player.hero.shortName}_sb.png`"
        :alt="player.hero.displayName"
      />
    </td>
    <td class="match-player__name">
      {{ player.steamAccount.name }}
    </td>
    <td class="match-player__hero">
      {{ player.hero.displayName }}
    </td>
    <td class="match-player__level">
      {{ player.level }}
    </td>
    <td class="match-player__networth">
      {{ player.networth }}
    </td>
    <td class="match-player__gpm">
      {{ player.goldPerMinute }}
    </td>
    <td class="match-player__kills">
      {{ player.kills }}
    </td>
    <td class="match-player__deaths">
      {{ player.deaths }}
    </td>
    <td class="match-player__assists">
      {{ player.assists }}
    </td>
  </tr>
</template>

<script lang="ts">
import { MatchPlayerType } from '@altgen/stratz-types'

import Vue from 'vue'

export default Vue.extend({
  props: {
    player: {
      type: Object as () => MatchPlayerType,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.match-player {
  background-color: #00a422;

  &--dire {
    background-color: #d42222;
  }

  td {
    border: none;
  }
}
</style>
