import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

type themingState = {
  colorblind: Boolean
  light: Boolean
}

@Module({
  name: 'accessibility',
  stateFactory: true,
  namespaced: true,
})
export default class RootModule extends VuexModule {
  theming: themingState = {
    colorblind: false,
    light: false,
  }

  get themeClasses(): String {
    const classes: String[] = []

    Object.keys(this.theming).forEach((key) => {
      if (this.theming[key]) {
        classes.push(`theme--${key}`)
      }
    })

    const className = classes.join(' ')

    return className
  }

  @Mutation
  setColorblind(payload: Boolean): void {
    const updatedTheming = this.theming

    updatedTheming.colorblind = payload

    this.theming = updatedTheming
  }

  @Mutation
  toggleColorblind() {
    const updatedTheming = this.theming

    updatedTheming.colorblind = !updatedTheming.colorblind

    this.theming = updatedTheming
  }

  @Mutation
  setLightmode(payload: Boolean): void {
    const updatedTheming = this.theming

    updatedTheming.light = payload

    this.theming = updatedTheming
  }

  @Mutation
  toggleLightmode() {
    const updatedTheming = this.theming

    updatedTheming.light = !updatedTheming.light

    this.theming = updatedTheming
  }
}
