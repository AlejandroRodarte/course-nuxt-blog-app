import { withNamespace as authTypes } from '../store/modules/auth';

// one-shot token verification middleware
export default function(ctx) {
  // if user is authenticated, do nothing
  if (ctx.store.getters[authTypes.IS_AUTHENTICATED]) return;
  const payload = { cookie: ctx.req ? ctx.req.headers.cookie : undefined };
  // initialize authentication procedure
  ctx.store.dispatch(authTypes.INITIALIZE_AUTHENTICATION, payload);
}
