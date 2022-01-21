import { withNamespace as authTypes } from '../store/modules/auth';

export default function(ctx) {
  if (process.client) {
    ctx.store.dispatch(authTypes.INITIALIZE_AUTHENTICATION);
  }
}
