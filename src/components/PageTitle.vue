<template>
    <h2>{{title}}</h2>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'NAME OF PAGE'
    }
  }
}
</script>
