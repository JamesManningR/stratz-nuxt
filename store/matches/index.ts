import { MatchType } from '~/graphql/types/stratz-api-types'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Store } from 'vuex'

import { State as RootState } from '../types'
import { State, Actions, Mutations } from './types'
import getMatches from '~/graphql/queries/matches/getMatch.gql'

@Module({
  name: 'matches',
  stateFactory: true,
  namespaced: true,
})
class MatchesModule extends VuexModule {
  match: MatchType = {}
  matches: MatchType[] = []

  @Mutation
  RESET_MATCH() {
    state.match = {}
  }

  @Mutation
  SET_MATCH(state: State, payload: MatchType): void {
    state.match = payload
  }

  @Mutation
  RESET_MATCHES(state: State): void {
    state.matches = []
  }

  @Mutation
  SET_MATCHES(state: State, payload: MatchType[]): void {
    state.matches = payload
  }

  @Mutation
  ADD_MATCH_TO_MATCHES(state: State, payload: MatchType): void {
    const updatedMatches = [...state.matches, payload]
    state.matches = updatedMatches
  }

  @Mutation
  REMOVE_MATCH_FROM_MATCHES(state: State, id: number) {
    const updatedMatches = state.matches.filter((match) => {
      return match.id !== id
    })
    state.matches = updatedMatches
  }

  @Action
  async [Actions.fetchMatch]({ commit }) {
    try {
      await $apolloHelpers.query({
          query: getMatch,
          variables: {
            matchId: 5985270662,
          },
        })
        .then((res: ApiResponse) => {
          commit(Mutations.SET_MATCH, res.data.match)
        })
    } catch (err) {
      console.log(err)
    }
  },

  @Action
  async [Actions.fetchMatches]({ commit }) {
    try {
      await $apolloHelpers.query({
          query: getMatches,
          variables: {
            matchIds: [
              5980625840, 5986859466, 5984932062, 5973326275, 5973781427,
            ],
          },
        })
        .then((res: ApiResponse) => {
          commit(Mutations.SET_MATCHES, res.data.matches)
        })
    } catch (err) {
      console.log(err)
    }
  },
}



const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'
