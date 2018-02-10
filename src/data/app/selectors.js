/*
 * Example:
 */

export const app = (state) => {
  return state.app;
}

export const navigationStatus = (state) => {
  return app(state).navigationStatus;
}
