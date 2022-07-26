<template>
  <div>
    <button type="button" @click="cntPlus">ADD1</button>
    <p>the Counter is : {{counter}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    cntPlus () {
      this.counter = this.counter + 1
    }
  }
}
</script>

<style>

</style>
