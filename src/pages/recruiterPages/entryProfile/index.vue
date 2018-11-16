<template>
  <v-app style="position:relative" class="white">
    <NewRecruiter />
    <v-layout class="my-4" align-center justify-center row fill-height>
      <v-flex xs12 md6>
        <v-card flat class="text-sm-left title py-3">
          Hello, averagejoe@gmail.com
        </v-card>
        <v-card class="elevation-3" style="border-top:3px solid green">
          <v-layout column px-5 py-3>
            <v-layout wrap align-center justify-space-around row fill-height>
              <v-flex xs10 md5 class="mt-1 text-sm-left">
                First name
                <v-text-field single-line outline></v-text-field>
              </v-flex>
              <v-flex xs10 md5 class="mt-1 text-sm-left">
                Last name
                <v-text-field single-line outline></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout wrap justify-space-around row fill-height>
              <v-flex xs10 md5 class="mt-1 text-sm-left">
                Current company
                <v-text-field messages="This will not be visible to anyone" single-line outline></v-text-field>
              </v-flex>
              <v-flex xs10 md5 class="mt-1 text-sm-left">
                Contact number
                <v-text-field class="mb-0 pb-0" mask="#" single-line outline></v-text-field>
                <v-checkbox class="mt-0" :label="`Visible to team`" v-model="contactVisibility"></v-checkbox>
              </v-flex>
            </v-layout>
            <v-layout wrap align-center justify-space-around row fill-height>
              <v-flex xs10 md11 class="mt-1 pb-0 text-sm-left">
                Alternate Email (optional)
                <v-text-field single-line outline></v-text-field>
                <v-checkbox class="mt-0" :label="`Visible to team`" v-model="emailVisibility"></v-checkbox>
              </v-flex>

            </v-layout>
            <v-layout wrap align-center justify-space-around row fill-height>
              <v-flex xs10 md5 class="mt-1 text-sm-left">

                <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                  <v-text-field slot="activator" v-model="date" label="Birthday date" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs10 md5 class="mt-1 text-sm-left">
                <v-radio-group v-model="row" row>
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
            <v-btn color="success" dark large>Save</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<style scoped>
</style>

<script>
import NewRecruiter from "../../../components/Navbars/newRecruiter";
export default {
  data() {
    return {
      emailVisibility: true,
      contactVisibility: true,
      date: null,
      menu: false,
      row: null
    };
  },
  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  },
  components: { NewRecruiter }
};
</script>