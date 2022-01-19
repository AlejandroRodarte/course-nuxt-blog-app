const MODULE_NAME = 'auth';
const MUTATE_SET_TOKEN = 'mutations/mutateSetToken';
const AUTHENTICATE_USER = 'actions/authenticateUser';

const withoutNamespace = {
  MUTATE_SET_TOKEN,
  AUTHENTICATE_USER
};

const withNamespace = {
  MUTATE_SET_TOKEN: `${ MODULE_NAME }/${ MUTATE_SET_TOKEN }`,
  AUTHENTICATE_USER: `${ MODULE_NAME }/${ AUTHENTICATE_USER }`,
};

export { withoutNamespace, withNamespace };
