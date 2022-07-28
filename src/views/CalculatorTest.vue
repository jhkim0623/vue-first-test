<template>
  <div>
    <h3>Calculator</h3>
    <br>
    <div>
      <input type="text" v-model="num1" @keyup="plusNumbers" />
      <br>
      <span>+</span>
      <br>
      <input type="text" v-model="num2" @keyup="plusNumbers" />
      <p>=</p>
      <br>
      <h5>{{result}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculatorTest',
  data () {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    plusNumbers () {
      this.result = parseInt(this.num1) + parseInt(this.num2)
    }
  }
}
</script>

<style>

</style>
