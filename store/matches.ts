import { ApiResponse, MatchType } from '@altgen/stratz-types'
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

import getMatch from '~/graphql/queries/matches/getMatch.gql'
import getMatches from '~/graphql/queries/matches/getMatches.gql'

@Module({
  name: 'matches',
  stateFactory: true,
  namespaced: true,
})
export default class MatchesModule extends VuexModule {
  match: MatchType = {}
  matches: MatchType[] = []

  @Mutation
  resetMatch() {
    this.match = {}
  }

  @Mutation
  setMatch(payload: MatchType): void {
    this.match = payload
  }

  @Mutation
  resetMatches(): void {
    this.matches = []
  }

  @Mutation
  setMatches(payload: MatchType[]): void {
    this.matches = payload
  }

  @Mutation
  addToMatches(payload: MatchType): void {
    const updatedMatches = [...this.matches, payload]
    this.matches = updatedMatches
  }

  @Mutation
  removeFromMatches(id: number) {
    const updatedMatches = this.matches.filter((match) => {
      return match.id !== id
    })
    this.matches = updatedMatches
  }

  @Action({ commit: 'setMatches' })
  async fetchMatch() {
    try {
      await this.store.app.apolloProvider.defaultClient
        .query({
          query: getMatch,
          variables: {
            matchId: 5985270662,
          },
        })
        .then((res: ApiResponse) => {
          return res.data.match
        })
    } catch (err) {
      console.log(err)
    }
  }

  @Action({ commit: 'setMatches' })
  async fetchMatches() {
    try {
      await this.store.app.apolloProvider.defaultClient
        .query({
          query: getMatches,
          variables: {
            matchIds: [
              5980625840, 5986859466, 5984932062, 5973326275, 5973781427,
            ],
          },
        })
        .then((res: ApiResponse) => {
          return res.data.matches
        })
    } catch (err) {
      console.log(err)
    }
  }
}
