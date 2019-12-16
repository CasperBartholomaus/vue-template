<template>
  <div>
    {{counter}}
    <md-button class="md-raised md-primary btnIncrement" @click="this.incrementCounter">Increment</md-button>
    <md-button class="md-raised md-primary btnDecrement" @click="this.decrementCounter">Decrement</md-button>
  </div>
</template>

<script>
    export default {
      name: 'Home',
      methods: {
        incrementCounter(){
          this.$store.dispatch('increment');
        },
        decrementCounter(){
          this.$store.dispatch('decrement');
        }
      },
      computed: {
        counter: {
          get() {
            return this.$store.getters.getCounter;
          }
        }
      }
    };
</script>