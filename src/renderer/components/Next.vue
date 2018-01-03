<template >
   <v-container fill-height grid-list-md fluid class="grey lighten-4">
    <v-layout row wrap>
      <v-flex
        v-for="result in results"
        :key="result.title">
      <v-card>
        <v-card-media
          >
        <v-card-title><h1>{{ result.title }}</h1></v-card-title>
        <c-card-text><p>{{ result.abstract }}</p></c-card-text>
        </v-card-media>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
export default {
    name: 'next-page',
    data: () => ({
      results: []
    }),
    mounted () {
      axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=edb666caf2b746888d8a25eb93c8fa17')
        .then(response => { this.results = response.data.results })
    }
  }
</script>