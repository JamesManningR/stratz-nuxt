import { GetterTree, MutationTree } from 'vuex'

import { State as RootState } from '../types'
import { State, Mutations, Getters } from './types'

export const state: State = {
  theming: {
    colorblind: false,
    light: true,
  },
}

export const getters: GetterTree<State, RootState> = {
  [Getters.themeClasses]: (state): String => {
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

export const mutations: MutationTree<State> = {
  [Mutations.SET_COLORBLIND](state: State, payload: Boolean): void {
    const newState = state

    newState.theming.colorblind = payload

    state = newState
  },
  [Mutations.TOGGLE_COLORBLIND](state: State) {
    state.theming.colorblind = !state.theming.colorblind
  },
  [Mutations.SET_LIGHTMODE](state: State, payload: Boolean): void {
    const newState = state

    newState.theming.light = payload

    state = newState
  },
  [Mutations.TOGGLE_LIGHTMODE](state: State) {
    state.theming.light = !state.theming.light
  },
}
