<template>
  <div>

    <br>
    <button type="button" @click="childFunc" ref="btn">Child Click</button>
  </div>
</template>

<script>

export default {
  methods: {
    childFunc () {
      console.log('부모컴포넌트에서 직접 발생시킨 이벤트')
    },
    callFromParent () {
      console.log('부모컴포넌트에서 함수를 직접 호출')
    },
    dataOptSync () {
      this.msg = '변경된 메세지'
    }
  },
  data () {
    return {
      msg: 'org MSG'
    }
  }
//   mounted () {
//     this.$emit('send-message', this.msg)
//   }
}
</script>

<style>

</style>
