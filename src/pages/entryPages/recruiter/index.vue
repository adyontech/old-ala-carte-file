<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 md5 class="mid-box">
      <v-card flat style="padding:0">
        <v-layout class="selector-tab" align-center justify-center row fill-height>
          <v-flex xs6 @click="tabSwitchToSignup" class="selector-tab-content" :style="styleObjectSignUp">
            Signup
          </v-flex>
          <v-flex xs6 @click="tabSwitchToLogin" class="selector-tab-content" :style="styleObjectLogin">
            Login
          </v-flex>
        </v-layout>
      </v-card>
      <v-card>
        <LoginTab v-if="tabToShow == 'loginInTab'" />
        <SignUpTab v-if="tabToShow == 'SignUpTab'" />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<style>
.mid-box {
  border: 1px solid black;
  border-bottom: 0;
}
.selector-tab-content {
  font-size: 25px;
  padding: 5px;
  height: 55px;
}
</style>

<script>
import LoginTab from "./login";
import SignUpTab from "./signup";
export default {
  data() {
    return {
      tabToShow: "loginInTab",
      styleObjectSignUp: {},
      styleObjectLogin: {
        backgroundColor: "#f5f5f5"
      }
    };
  },
  components: {
    LoginTab,
    SignUpTab
  },
  methods: {
    tabSwitchToLogin: function() {
      this.tabToShow = "loginInTab";
      this.styleObjectLogin = {
        backgroundColor: "#f5f5f5"
      };
      this.styleObjectSignUp = {};
    },
    tabSwitchToSignup: function() {
      this.tabToShow = "SignUpTab";
      this.styleObjectLogin = {};
      this.styleObjectSignUp = {
        backgroundColor: "#f5f5f5"
      };
    }
  }
};
</script>
