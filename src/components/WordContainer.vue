<template>
  <main>
    <section class='prompt' v-if='!this.synonyms.length'>
      Enter a word in the form above to find its synonyms!
    </section>
    <section class='word-card' v-else-if='this.synonyms.length' v-for='(synonym) in this.synonyms' v-bind:key='(synonym + 1)'>
      <h3 v-on:click='changeWord(synonym.meta.id)'>{{synonym.meta.id}}</h3>
    </section>
  </main>
</template>

<script>
export default {
  name: 'WordContainer',
  props: ['synonyms', 'updateWord'],
  methods: {
    changeWord: function (word) {
      this.$emit('update-word', word)
    }
  }
}
</script>

<style scoped>
main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
}

.prompt {
  font-size: 3rem;
  height: 20%;
  padding-top: 30px;
  width: 90%;
}

.word-card {
  height: 10%;
  margin: 10px;
  width: 30%;
}

.word-card:hover {
  transform: scale(1.05)
}

h3 {
  border: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 4rem;
  margin-top: 0;
}
</style>
