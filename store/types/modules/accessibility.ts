export type AccessibilityState = {
  theming: {
    colorblind: Boolean
    light: Boolean
  }
}

export enum AccessibilityMutations {
  SET_COLORBLIND = 'SET_COLORBLIND',
  TOGGLE_COLORBLIND = 'TOGGLE_COLORBLIND',
  SET_LIGHTMODE = 'SET_LIGHTMODE',
  TOGGLE_LIGHTMODE = 'TOGGLE_LIGHTMODE',
}
