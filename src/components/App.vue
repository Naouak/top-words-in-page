<template>
  <div>
    <div v-if="error">
      <Error>
        <strong>&#128542; Could not found any words in the page.</strong><br>
        <br>
        Reason :<br>
        {{error.message}}
      </Error>
    </div>
    <table v-else>
      <thead>
      <tr>
        <th>Word</th>
        <th>Count</th>
      </tr>
      </thead>
      <tbody>
        <word :word="w[0]" :count="w[1]" v-for="w in words"></word>
      </tbody>
    </table>

  </div>
</template>
<script>
  import Word from './Word.vue';
  import Error from './Error.vue';
  import getWords from '../wordprovider';

  export default {
      name: 'app',
      data(){
          return {
              words: [],
              error: null,
          };
      },
      created(){
          browser.tabs.onActivated.addListener(this.getWords);
          this.getWords();
      },
      destroyed(){
          browser.tabs.onActivated.removeListener(this.getWords);
      },
      methods: {
          getWords(){
              this.words = [];
              this.error = null;
              getWords().then((words) => {
                 this.words = words;
              }).catch(error => this.error = error);
          }
      },
      components: {
          Word,
          Error,
      }
  }
</script>
<style>
  table{
    width: 100%;
  }

  tr:nth-child(odd){
    background: #eeeeee;
  }
</style>
