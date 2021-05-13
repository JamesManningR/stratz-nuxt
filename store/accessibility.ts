import { GetterTree, ActionTree, MutationTree } from 'vuex'

export type AccesibilityState = {
  theming: {
    colorblind: Boolean
    light: Boolean
  }
}

export const state: AccesibilityState = {
  theming: {
    colorblind: false,
    light: true,
  },
}

export const getters: GetterTree<AccesibilityState, AccesibilityState> = {
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

export const mutations: MutationTree<AccesibilityState> = {
  SET_COLORBLIND(state: AccesibilityState, payload: Boolean): void {
    const newState = state

    newState.theming.colorblind = payload

    state = newState
  },
  SET_LIGHT_MODE(state: AccesibilityState, payload: Boolean): void {
    const newState = state

    newState.theming.light = payload

    state = newState
  },
}

export const actions: ActionTree<AccesibilityState, AccesibilityState> = {
  togglelightMode({ commit, state }) {
    const payload = !state.theming.light
    commit('SET_LIGHT_MODE', payload)
  },
  toggleColorBlind({ commit, state }) {
    const payload = !state.theming.colorblind
    commit('SET_COLORBLIND', payload)
  },
  setlightMode({ commit }, value: Boolean) {
    commit('SET_LIGHT_MODE', value)
  },
  setColorBlind({ commit }, value: Boolean) {
    commit('SET_COLORBLIND', value)
  },
}
