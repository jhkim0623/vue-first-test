<template>
  <div>
    <PageTitle  title="This is Child Component View"/>
    <br>
    <button type="button" @click="childFunc"></button>
  </div>
  <child-components @send-message="sendMessage" ref="child_component" />
  <br>
  <div>
    <button type="button" @click="changeChildData">changeChildData</button>
    <br>
    <button type="button" @click="checkChild">child Component Check</button>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle'
import ChildComponents from './ChildComponents.vue'
export default {
  components: { PageTitle, ChildComponents },
  computed: {
    msg () {
      return this.$refs.child_component.msg
    }
  },
  methods: {
    clickFnc () {
      this.$refs.ChildComponents.$refs.btn.click()
    },
    changeChildData () {
      this.$refs.child_component.msg = 'changed from parent MSG'
      // console.log(this.$refs.child_component.msg)
    },
    checkChild () {
      alert(this.msg)
    }
  },
  mounted () {
    this.$refs.child_component.callFromParent()
  }
}
</script>

<style>

</style>
