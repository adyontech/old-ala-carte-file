<template>
    <div>
        <v-content>
            <v-layout>

                <v-flex class="blue--text text--accent-2" style="font-size:30px" my-3>
                    Log In to your Account.
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs6>

                </v-flex>
                <v-flex xs6>
                    <v-layout column class="grey lighten-4" pa-5>
                        <v-flex class="title" mb-4>
                            Please enter your email and password to continue
                        </v-flex>
                        <v-flex class="text-xs-left" my-3>
                            <v-layout justify-center>
                                <v-flex xs7 class="title font-weight-bold" mb-3>
                                    Your Email
                                </v-flex>
                            </v-layout>
                            <v-layout justify-center>
                                <v-flex xs7>
                                    <v-text-field color="grey darken-1" outline v-model="user.email" single-line placeholder="Enter the email used during signup..."></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex class="text-xs-left" mt-2>
                            <v-layout justify-center>
                                <v-flex xs7 class="title font-weight-bold" mb-3>
                                    Your Password
                                </v-flex>
                            </v-layout>
                            <v-layout justify-center>
                                <v-flex xs7>
                                    <v-text-field color="grey darken-1" v-model="user.password" type="password" outline single-line label="Enter the password used during signup..."></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex mt-4 mb-5>
                            <v-layout row justify-center>
                                <v-flex xs3>
                                    <v-btn block class="white--text px-5" @click="handleUserLogin" style="border-radius:5px" color="blue accent-2">log in</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex pb-5>
                            <v-layout row>
                                <v-flex class="blue--text text--accent-2 subheading">
                                    Forgot your username or password?
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>

            </v-layout>

        </v-content>
    </div>
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
    window.document.title = "Login";
  },
  methods: {
    ...mapMutations(["setTokenForUser"]),
    validateAllFields() {
      if (
        !emailRegex.test(this.user.email) ||
        !passwordRegex.test(this.user.password)
      )
        return false;
      else return true;
    },
    handleUserLogin() {
      let email = this.user.email;
      let password = this.user.password;

      // if (!this.validateAllFields()) {
      //   this.displayMessage("warning", "Invalid Fields Format Entered");
      //   return;
      // }

      this.loading = true;

      loginRecruiter({ email, password })
        .then(response => {
          console.log(response);
          return response.data;
        })
        .then(data => {
          if (data.error === undefined) {
            if (data.success) {
              this.setTokenForUser({
                token: data.token
              });
              this.$router.push({
                path: "/dashboard"
              });
            } else {
              // this.displayMessage("error", data.message);
            }
          } else {
            // this.displayMessage("error", data.error);
          }
          this.loading = false;
        });
    }
  }
};
</script>