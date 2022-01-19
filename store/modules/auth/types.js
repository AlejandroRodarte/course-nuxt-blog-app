const MODULE_NAME = 'auth';
const IS_AUTHENTICATED = 'getters/isAuthenticated';
const MUTATE_SET_TOKEN = 'mutations/mutateSetToken';
const AUTHENTICATE_USER = 'actions/authenticateUser';

const withoutNamespace = {
  IS_AUTHENTICATED,
  MUTATE_SET_TOKEN,
  AUTHENTICATE_USER
};

const withNamespace = {
  IS_AUTHENTICATED: `${ MODULE_NAME }/${ IS_AUTHENTICATED }`,
  MUTATE_SET_TOKEN: `${ MODULE_NAME }/${ MUTATE_SET_TOKEN }`,
  AUTHENTICATE_USER: `${ MODULE_NAME }/${ AUTHENTICATE_USER }`,
};

export { withoutNamespace, withNamespace };
