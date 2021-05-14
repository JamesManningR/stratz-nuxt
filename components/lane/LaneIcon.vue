<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 295.41 295.41"
    class="lane-icon"
    :class="`lane-icon--${laneClass}`"
  >
    <path
      d="M17.94,277.48L17.94 259.8 25 252.74 25 42.84 0 42.84 0 282.91 6.25 289.16 12.5 282.91 17.94 277.48z"
      class="path path--r path--r-o"
    ></path>
    <path
      d="M42.68,270.41L35.61 277.48 17.94 277.48 12.5 282.91 6.25 289.16 12.5 295.41 252.57 295.41 252.57 270.41 42.68 270.41z"
      class="path path--r path--r-s"
    ></path>
    <path
      d="M35.61,277.48L148.95 164.14 131.27 146.47 17.94 259.8 17.94 277.48 35.61 277.48z"
      class="path path--r path--r-m"
    ></path>
    <path
      d="M277.48,17.94L277.48 35.61 270.41 42.68 270.41 252.57 295.41 252.57 295.41 12.5 289.16 6.25 282.91 12.5 277.48 17.94z"
      class="path path--d path--d-o"
    ></path>
    <path
      d="M252.74,25L259.8 17.94 277.48 17.94 282.91 12.5 289.16 6.25 282.91 0 42.84 0 42.84 25 252.74 25z"
      class="path path--d path--d-s"
    ></path>
    <path
      d="M259.8,17.94L146.47 131.27 164.14 148.95 277.48 35.61 277.48 17.94 259.8 17.94z"
      class="path path--d path--d-m"
    ></path>
  </svg>
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
  .path {
    opacity: 0.25;

    &--r {
      fill: $green;
    }
    &--d {
      fill: $red;
    }
  }

  &--r {
    &-s {
      .path--r-s {
        opacity: 1;
      }
    }
    &-o {
      .path--r-o {
        opacity: 1;
      }
    }
    &-m {
      .path--r-o {
        opacity: 1;
      }
    }
  }

  &--d {
    &-s {
      .path--d-s {
        opacity: 1;
      }
    }
    &-o {
      .path--d-o {
        opacity: 1;
        fill: red;
      }
    }
    &-m {
      .path--d-o {
        opacity: 1;
      }
    }
  }
}
</style>
