<template>
  <div>
    {{counter}}
    <button class="btnIncrement" @click="this.incrementCounter">Increment</button>
    <button class="btnDecrement" @click="this.decrementCounter">Decrement</button>
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