const MODULE_NAME = 'auth';
const IS_AUTHENTICATED = 'getters/isAuthenticated';
const MUTATE_SET_LOGIN = 'mutations/mutateSetLogin';
const MUTATE_SET_LOGOUT = 'mutations/mutateSetLogout';
const MUTATE_SET_TIMER_ID = 'mutation/mutateSetTimerId';
const AUTHENTICATE_USER = 'actions/authenticateUser';
const SET_LOGOUT_TIMER = 'actions/setLogoutTimer';
const SET_LOGOUT = 'actions/setLogout';
const INITIALIZE_AUTHENTICATION = 'actions/initializeAuthentication';

const withoutNamespace = {
  IS_AUTHENTICATED,
  MUTATE_SET_LOGIN,
  MUTATE_SET_LOGOUT,
  MUTATE_SET_TIMER_ID,
  AUTHENTICATE_USER,
  SET_LOGOUT_TIMER,
  SET_LOGOUT,
  INITIALIZE_AUTHENTICATION
};

const withNamespace = {
  IS_AUTHENTICATED: `${ MODULE_NAME }/${ IS_AUTHENTICATED }`,
  MUTATE_SET_LOGIN: `${ MODULE_NAME }/${ MUTATE_SET_LOGIN }`,
  MUTATE_SET_LOGOUT: `${ MODULE_NAME }/${ MUTATE_SET_LOGOUT }`,
  MUTATE_SET_TIMER_ID: `${ MODULE_NAME }/${ MUTATE_SET_TIMER_ID }`,
  AUTHENTICATE_USER: `${ MODULE_NAME }/${ AUTHENTICATE_USER }`,
  SET_LOGOUT_TIMER: `${ MODULE_NAME }/${ SET_LOGOUT_TIMER }`,
  SET_LOGOUT: `${ MODULE_NAME }/${ SET_LOGOUT }`,
  INITIALIZE_AUTHENTICATION: `${ MODULE_NAME }/${ INITIALIZE_AUTHENTICATION }`,
};

export { withoutNamespace, withNamespace };
