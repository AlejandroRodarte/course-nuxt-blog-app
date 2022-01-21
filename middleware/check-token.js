import { withNamespace as authTypes } from '../store/modules/auth';

export default function(ctx) {
  const payload = {
    client: process.client,
    cookie: ctx.req ? ctx.req.headers.cookie : undefined
  };
  ctx.store.dispatch(authTypes.INITIALIZE_AUTHENTICATION, payload);
}
