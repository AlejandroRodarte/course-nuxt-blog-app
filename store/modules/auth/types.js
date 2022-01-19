const MODULE_NAME = 'auth';
const AUTHENTICATE_USER = 'actions/authenticateUser';

const withoutNamespace = {
  AUTHENTICATE_USER
};

const withNamespace = {
  AUTHENTICATE_USER: `${ MODULE_NAME }/${ AUTHENTICATE_USER }`,
};

export { withoutNamespace, withNamespace };
