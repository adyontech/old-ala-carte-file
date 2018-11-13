import addSeconds from "date-fns/add_seconds";
export default {
  state: {
    email: "",
    // tokenValidity: falseidToken: localStorage.getItem("idToken"),
    accessToken: localStorage.getItem("accessToken") || "",
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
    update_auth_tokens(state, tokenData) {
      localStorage.setItem("accessToken", tokenData.token);

      state.accessToken = localStorage.getItem("accessToken");
      const tokensExpiry = addSeconds(new Date(), tokenData.expiresIn);
      console.log(tokensExpiry);
      state.tokensExpiry = tokensExpiry;
      localStorage.setItem("tokensExpiry", tokensExpiry);
      localStorage.setItem("expires_in", tokensExpiry);
    },
    removeTokenForUser(state) {
      state.accessToken = "";
      window.localStorage.removeItem("accessToken");
    }
  }
};
