<template>
    <v-layout align-center justify-center row fill-height>
        <v-flex xs7>
            Getting you in
            <div class="text-xs-center">
                <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
            </div>
        </v-flex>
    </v-layout>
</template>
<style lang="stylus" scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>
<script>
import { mapMutations } from "vuex";
import store from "./../../..//store/store";
import { facebookRecruiterEntry } from "./../../../api/auth/index.js";

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
  created() {
    console.log(this.$route.query.code);
    this.validateUser(this.$route.query.code);
  },

  methods: {
    ...mapMutations(["update_auth_tokens"]),

    async validateUser(code) {
      try {
        let response = await facebookRecruiterEntry(code);

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
