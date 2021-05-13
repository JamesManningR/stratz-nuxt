<template>
  <svg-icon name="lanes" class="lane-icon" :class="`lane-icon--${laneClass}`" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class LaneIcon extends Vue {
  // TODO: Dry this out, babel wont let me use the right map, so figure this out when you can
  // This is an aweful method for getting the lanes but until this babel issue is sorted, it'll have to do
  private LaneMap = ['s', 'm', 'o']

  @Prop()
  public isRadiant!: Boolean

  @Prop()
  public lane!: '1' | '2' | '3'

  get LaneInitial(): String {
    return this.LaneMap[parseInt(this.lane) - 1]
  }

  get teamInitial(): String {
    // TODO: Dry this out, babel wont let me use the right map, so figure this out when you can
    return this.isRadiant ? 'r' : 'd'
  }

  get laneClass(): String {
    return `${this.teamInitial}-${this.LaneInitial}`
  }
}
</script>

<style lang="scss">
// TODO: ALSO REALLY INEFICIENT, Please fix this
.lane-icon {
  path {
    opacity: 0.5;
  }

  &--d {
    &-s {
      .d-s {
        opacity: 1;
      }
    }
    &-o {
      .d-o {
        opacity: 1;
        fill: red;
      }
    }
    &-m {
      .d-o {
        opacity: 1;
      }
    }
  }
  &--r {
    &-s {
      .r-s {
        opacity: 1;
      }
    }
    &-o {
      .r-o {
        opacity: 1;
      }
    }
    &-m {
      .r-o {
        opacity: 1;
      }
    }
  }
}
</style>
