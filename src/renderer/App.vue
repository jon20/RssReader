<template>
<v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
</v-navigation-drawer>
<v-toolbar color="indigo" dark fixed app>
  <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
<v-toolbar-title>RssReader</v-toolbar-title>
</v-toolbar>
    <router-view></router-view>
</v-app>
</template>

<script>
  export default {
    name: 'rss',
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<style>
  /* CSS */
</style>
