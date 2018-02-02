<template >
   <v-container fill-height grid-list-md fluid class="grey lighten-4">
     <div v-if="loading">
      <v-progress-circular indeterminate v-bind:size="70" color="red"></v-progress-circular>
     </div>
    <v-layout row wrap>
      <v-flex
        v-for="result in results"
        :key="result.title">
      <v-card color="blue grey darken-2" class="white--text">
        <v-card-media
          >
        <v-card-title><div class="headline">{{ result.title }}</div>
            <div>{{ result.link }}</div>
        </v-card-title>
        <c-card-text></c-card-text>
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
      loading: true,
      results: []
    }),
    mounted () {
      axios.get('https://query.yahooapis.com/v1/public/yql', {
        params: {
          q: `select * from rss where url='http://jp.techcrunch.com/feed/'`,
          format: 'json'
        }
      })
        .then(responce => {
          console.log(responce.data.query.results.item)
          this.results = responce.data.query.results.item
          this.loading = false
        })
    }
}
</script>