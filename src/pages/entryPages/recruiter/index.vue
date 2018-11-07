<template>
  <v-card>
    <v-tabs color="cyan" dark slider-color="yellow">
      <v-tab ripple>
        Login
      </v-tab>
      <v-tab ripple>
        Item 2
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <LoginTab />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>Contents for Item 2 go here</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import LoginTab from "./login";
export default {
  components: {
    LoginTab
  }
};
</script>
