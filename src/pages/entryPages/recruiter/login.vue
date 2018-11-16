<template>
  <v-card flat>
    <v-layout column class="white" pa-5>
      <v-flex xs11>
        <v-text-field color="grey darken-1" hint="Please choose special email" prepend-icon="email" outline v-model="user.email" single-line placeholder="Enter the email used during signup..."></v-text-field>
      </v-flex>
      <v-flex xs11>
        <v-text-field color="grey darken-1" v-model="user.password" prepend-icon="vpn_key" type="password" outline single-line label="Enter the password used during signup..."></v-text-field>
      </v-flex>
      <v-flex pb-1>
        <v-layout align-center justify-end row fill-height class="blue--text text--accent-2 subheading">
          Forgot password?
        </v-layout>
      </v-flex>
      <v-flex mb-1>
        <v-layout row justify-center>
          <v-flex xs3>
            <v-btn block class="white--text px-5" @click="handleUserLogin" style="border-radius:5px" color="blue accent-2">Log in</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-divider></v-divider>
      <v-flex pb-1>
        <v-layout align-center justify-center="" row fill-height class="black--text text--accent-2 subheading">
          or connect with
        </v-layout>
      </v-flex>
      <v-layout align-center justify-space-around row fill-height>
        <v-flex mx-2>
          <v-btn block class="white--text px-3" @click="handleUserLogin" style="border-radius:5px" color="red accent-2">Google</v-btn>
        </v-flex>
        <v-flex mx-2>
          <v-btn href="http://localhost:3000/pass/facebook" block class="white--text px-3" @click="handleUserLogin" style="border-radius:5px" color="green accent-2">Facebook</v-btn>
        </v-flex>
        <v-flex mx-2>
          <v-btn block class="white--text px-3" @click="handleUserLogin" style="border-radius:5px" color="blue accent-2">LinkedIn</v-btn>
        </v-flex>
      </v-layout>
      <v-flex pb-1 mt-2>
        <v-layout align-center justify-center row fill-height class="black--text text--accent-2 subheading">
          By signing up, you agree to our <span class="blue--text"> Terms of Service and Privacy Policy</span>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import store from "./../../..//store/store";
import { loginRecruiter } from "./../../../api/auth/index.js";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      loading: false,

      rules: {
        required: value => !!value || "Required.",
        email: value => {
          // return emailRegex.test(value) || "Invalid email";
        },
        password: value => {
          // return passwordRegex.test(value) || "Invalid phone number";
        }
      }
    };
  },
  mounted() {
    window.document.title = "Recruiter Login";
  },

  methods: {
    ...mapMutations(["update_auth_tokens"]),
    validateAllFields() {
      if (
        !emailRegex.test(this.user.email) ||
        !passwordRegex.test(this.user.password)
      )
        return false;
      else return true;
    },
    async handleUserLogin() {
      try {
        let email = this.user.email;
        let password = this.user.password;

        // if (!this.validateAllFields()) {
        //   this.displayMessage("warning", "Invalid Fields Format Entered");
        //   return;
        // }
        let response = await loginRecruiter({ email, password });

        if (response.error === undefined) {
          if (response.success) {
            // console.log(response);
            this.update_auth_tokens(response);
            this.$router.push({
              // path: "/dashboard"
            });
          } else {
            // this.displayMessage("error", data.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>