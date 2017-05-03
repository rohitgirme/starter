

export const CHANGE_AUTHENTICATED = 'change_authenticated';

export function changeAuthentication(isAuthenticated) {
  return {
    type: CHANGE_AUTHENTICATED,
    payload: isAuthenticated
  }
}