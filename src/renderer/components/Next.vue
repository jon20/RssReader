<template >
  <v-container>
    <h2>Hello</h2>
    <h1 v-for="result in results">{{ result.title }}</h1>
  </v-container>
</template>

<script>
  export default {
    name: 'next-page',
    data: () => ({
      results: [
        {title: 'the very first post'},
        {title: 'and then there was the second'},
        {title: 'third time\'s a charm'},
        {title: 'four the last time'}
      ]
    })
  }
</script>