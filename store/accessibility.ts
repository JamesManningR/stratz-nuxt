import { GetterTree, MutationTree } from 'vuex'
import { AccessibilityState, AccessibilityMutations } from './types'

export const state: AccessibilityState = {
  theming: {
    colorblind: false,
    light: true,
  },
}

export const getters: GetterTree<AccessibilityState, AccessibilityState> = {
  themeClasses: (state): String => {
    const classes: String[] = []

    Object.keys(state.theming).forEach((key) => {
      if (state.theming[key]) {
        classes.push(`theme--${key}`)
      }
    })

    const className = classes.join(' ')

    return className
  },
}

export const mutations: MutationTree<AccessibilityState> = {
  [AccessibilityMutations.SET_COLORBLIND](
    state: AccessibilityState,
    payload: Boolean
  ): void {
    const newState = state

    newState.theming.colorblind = payload

    state = newState
  },
  [AccessibilityMutations.TOGGLE_COLORBLIND](state: AccessibilityState) {
    state.theming.colorblind = !state.theming.colorblind
  },
  [AccessibilityMutations.SET_LIGHTMODE](
    state: AccessibilityState,
    payload: Boolean
  ): void {
    const newState = state

    newState.theming.light = payload

    state = newState
  },
  [AccessibilityMutations.TOGGLE_LIGHTMODE](state: AccessibilityState) {
    state.theming.light = !state.theming.light
  },
}
