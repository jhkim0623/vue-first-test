<template>
  <div>
    <PageTitle  title="This is Child Component View"/>
    <br>
    <button type="button" @click="childFunc"></button>
  </div>
  <child-components @send-message="sendMessage" ref="child_component" />
</template>

<script>
import PageTitle from '../components/PageTitle'
import ChildComponents from './ChildComponents.vue'
export default {
  components: { PageTitle, ChildComponents },

  methods: {
    childFunc () {
      console.log('부모컴포넌트에서 직접 발생시킨 이벤트')
    },
    clickFnc () {
      this.$refs.ChildComponents.$refs.btn.click()
    }
  }
}
</script>

<style>

</style>
