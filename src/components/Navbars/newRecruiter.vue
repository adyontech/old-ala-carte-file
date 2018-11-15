<template>
    <v-toolbar class="elevation-1" color="#FFF">
        <v-toolbar-side-icon>
            <v-img :src="`../../../public/v.png`" :lazy-src="`../../../public/v.png`" aspect-ratio="1" class="grey lighten-2"></v-img>
        </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>VUEtIFY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <!-- <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn> -->
            <v-btn class="mr-4" icon>Logout
                <v-icon class="ml-1">power_settings_new</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>