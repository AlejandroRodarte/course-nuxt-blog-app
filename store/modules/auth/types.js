const MODULE_NAME = 'auth';
const IS_AUTHENTICATED = 'getters/isAuthenticated';
const MUTATE_SET_TOKEN = 'mutations/mutateSetToken';
const MUTATE_CLEAR_TOKEN = 'mutations/mutateClearToken';
const AUTHENTICATE_USER = 'actions/authenticateUser';
const SET_LOGOUT_TIMER = 'actions/setLogoutTimer';

const withoutNamespace = {
  IS_AUTHENTICATED,
  MUTATE_SET_TOKEN,
  MUTATE_CLEAR_TOKEN,
  AUTHENTICATE_USER,
  SET_LOGOUT_TIMER
};

const withNamespace = {
  IS_AUTHENTICATED: `${ MODULE_NAME }/${ IS_AUTHENTICATED }`,
  MUTATE_SET_TOKEN: `${ MODULE_NAME }/${ MUTATE_SET_TOKEN }`,
  MUTATE_CLEAR_TOKEN: `${ MODULE_NAME }/${ MUTATE_CLEAR_TOKEN }`,
  AUTHENTICATE_USER: `${ MODULE_NAME }/${ AUTHENTICATE_USER }`,
  SET_LOGOUT_TIMER: `${ MODULE_NAME }/${ SET_LOGOUT_TIMER }`,
};

export { withoutNamespace, withNamespace };
