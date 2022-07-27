<template>
  <child-components @send-message="sendMessage" ref="child_component" />
</template>

<script>
import ChildComponents from './ChildComponents.vue'
export default {
  components: { ChildComponents },
  methods () {
    this.$refs.ChildComponents.$refs.btn.click()
  }

}
</script>

<style>

</style>
