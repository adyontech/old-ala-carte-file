// import Store from "../store/index";
// import Router from "../router/index";
import isAfter from "date-fns/is_after";
import subtractMinutes from "date-fns/sub_minutes";
import addSeconds from "date-fns/add_seconds";
import differenceInMinutes from "date-fns/difference_in_minutes";
import differenceInMilliSeconds from "date-fns/difference_in_milliseconds";

let refreshTimeout = null;
export { initSession };
export { refreshTokens };
export { logout };
export default {
  initSession,
  refreshTokens,
  auth0
};

function logout() {
  Store.commit("update_auth_tokens", {}); //clear our tokens
  clearTimeout(refreshTimeout);
  refreshTimeout = null;
}

function initSession() {
  return new Promise(resolve => {
    let tokenExpiryDate = Store.getters["tokensExpiry"];
    if (!tokenExpiryDate) {
      console.log("No token expiry date. user probably never logged in");
      return Router.push("/login");
    }

    let tenMinutesBeforeExpiry = subtractMinutes(tokenExpiryDate, 10); //If the token has expired or will expire in the next 30 minutes
    const now = new Date();

    if (isAfter(now, tenMinutesBeforeExpiry)) {
      //If the token has expired or will expire in the next 10 minutes
      console.log("Token expired/will expire in the next 1 minutes");
      return Router.push("/login");
    }

    console.log("Token Ok. Expiring at " + tokenExpiryDate);
    refreshTimeout = setTimeout(
      refreshTokens,
      differenceInMilliSeconds(tenMinutesBeforeExpiry, now)
    );
  });
}

function refreshTokens() {
  return new Promise(resolve => {
    auth0.checkSession({}, function(err, authResult) {
      if (err) {
        Router.push("/login");
      }
      Store.commit("update_auth_tokens", authResult);
      const tokenExpiryDate = addSeconds(new Date(), authResult.expiresIn);
      const tenMinutesBeforeExpiry = subtractMinutes(tokenExpiryDate, 10);
      const now = new Date();
      refreshTimeout = setTimeout(
        refreshTokens,
        differenceInMilliSeconds(tenMinutesBeforeExpiry, now)
      );
      resolve();
    });
  });
}
