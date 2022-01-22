import { withNamespace as authTypes } from '../store/modules/auth';

// setup authentication (runs on client)
export default function (ctx) {
  const stringifiedUserData = localStorage.getItem('userData');
  // no auth data; non-authenticated user
  if (!stringifiedUserData) return;
  const userData = JSON.parse(stringifiedUserData);
  const now = new Date().getTime();
  const expiresIn = userData.expirationDate - now;
  // stored token has expired; logout user without redirect (auth.js middleware will redirect)
  if (expiresIn <= 0) {
    const setLogoutPayload = { redirect: false };
    ctx.store.dispatch(authTypes.SET_LOGOUT, setLogoutPayload);
    return;
  }
  // token has not expired, set logout timer
  const payload = { duration: expiresIn };
  ctx.store.dispatch(authTypes.SET_LOGOUT_TIMER, payload);
}