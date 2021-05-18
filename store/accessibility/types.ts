export enum Getters {
  themeClasses = 'themeClasses',
}

export interface State {
  theming: {
    colorblind: Boolean
    light: Boolean
  }
}

export enum Mutations {
  SET_COLORBLIND = 'SET_COLORBLIND',
  TOGGLE_COLORBLIND = 'TOGGLE_COLORBLIND',
  SET_LIGHTMODE = 'SET_LIGHTMODE',
  TOGGLE_LIGHTMODE = 'TOGGLE_LIGHTMODE',
}
