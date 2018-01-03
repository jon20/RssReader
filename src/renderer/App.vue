<template>
<v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-tile  @click="":href=" item.href" :to="{name: item.href}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>RssReader</v-toolbar-title>
    </v-toolbar>
<main> 
  <v-fade-transition mode="out-in">
                <router-view></router-view>
  </v-fade-transition>
</main>

</v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'home', text: 'home', router: true, href: 'home' },
        { icon: 'add', text: 'add', router: true, href: 'next' },
        { icon: 'settings', text: 'setting', router: true, href: 'setting' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>

<style lang="stylus">
  /* CSS */
  @require '~vuetify/src/stylus/main.styl'
  @import 'css/main.css';
   .intro {
  display: flex;
  justify-content: center;
  margin: 4rem 0;
  }

  .text-ceter {
    text-align: center;
  } 
</style>
