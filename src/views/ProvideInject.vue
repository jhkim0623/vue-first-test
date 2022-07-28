<template>
  <provideInjectChild />
</template>

<script>
import provideInjectChild from './ProvideInjectChild.vue'
export default {
  components: { provideInjectChild },
  data () {
    return {
      items: ['A', 'B']
    }
  },
  provide () {
    return {
      itemLength: this.items.length
    }
  }

}
</script>
