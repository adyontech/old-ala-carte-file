export default {
  state: {
    email: "",
    token: localStorage.getItem("user-token") || "",
    displayLoader: false,
    // tokenValidity: falseidToken: localStorage.getItem("idToken"),
    accessToken: localStorage.getItem("accessToken"),
    tokensExpiry: localStorage.getItem("tokensExpiry")
  },
  getters: {
    // isTokenExists: state => !!state.token,
    // // isTokenValid: state => state.tokenValidity,
    // authStatus: state => state.status,
    // getToken: state => state.token,
    tokensExpiry: state => state.tokensExpiry,
    accessToken: state => state.accessToken,
    idToken: state => state.idToken
  },
  mutations: {
    // setTokenForUser(state, user) {
    //   state.token = user.token;
    //   window.localStorage.setItem("user-token", JSON.stringify(user.token));
    //   state.tokenValidity = true;
    // },
    update_auth_tokens(state, tokenData) {
      localStorage.setItem(
        "accessToken",
        tokenData.access_token || tokenData.accessToken
      ); //sometimes tokens are in snake case and other times they are in camelcase :/
      localStorage.setItem(
        "access_token",
        tokenData.access_token || tokenData.accessToken
      );
      state.accessToken = localStorage.getItem("accessToken");

      localStorage.setItem("idToken", tokenData.id_token || tokenData.idToken);
      localStorage.setItem("id_token", tokenData.id_token || tokenData.idToken);
      state.idToken = localStorage.getItem("idToken");

      const tokensExpiry = addSeconds(
        new Date(),
        tokenData.expires_in || tokenData.expiresIn
      );
      state.tokensExpiry = tokensExpiry;
      localStorage.setItem("tokensExpiry", tokensExpiry);
      localStorage.setItem("expires_in", tokensExpiry);
    },
    removeTokenForUser(state) {
      state.token = "";
      window.localStorage.removeItem("user-token");
      state.tokenValidity = false;
    },
    toggleLoader(state) {
      state.displayLoader = !state.displayLoader;
    }
  }
};
