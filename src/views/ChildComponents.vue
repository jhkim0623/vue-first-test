<template>
  <div>

    <br>
    <button type="button" @click="childFunc">Child Click</button>
  </div>
</template>

<script>

export default {
  methods: {
    childFunc () {
      console.log('부모컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>

<style>

</style>
