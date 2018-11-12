<template>
    <v-toolbar color="#FFF">
        <v-toolbar-side-icon>
            <v-img :src="`../../../public/v.png`" :lazy-src="`../../../public/v.png`" aspect-ratio="1" class="grey lighten-2"></v-img>
        </v-toolbar-side-icon>
        <v-toolbar-title>VUETiFY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <!-- <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn> -->
            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator">
                    <span>In</span>
                    <v-icon>arrow_drop_down</v-icon>
                </v-toolbar-title>

                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Applicant</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Recruiter</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>