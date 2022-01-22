import { withNamespace as authTypes } from '../store/modules/auth';

export default function(ctx) {
  if (ctx.store.getters[authTypes.IS_AUTHENTICATED]) {
    ctx.redirect('/admin');
  }
}
