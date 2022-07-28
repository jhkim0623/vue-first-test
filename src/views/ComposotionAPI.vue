<template>
  <div>
    <h3>Calculator</h3>
    <br>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers" />
      <br>
      <span>+</span>
      <br>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <p>=</p>
      <br>
      <h5>{{result}}</h5>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'CalculatorTest',
  setup () {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    })
    function plusNumbers () {
      state.result = parseInt(this.num1) + parseInt(this.num2)
    }
    return {
      state,
      plusNumbers
    }
  }

}
</script>

<style>

</style>
