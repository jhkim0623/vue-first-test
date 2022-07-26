
<template>
  <input type="text" v-model="valueModel"/>
  <div v-html="htmlString"></div>
    <label><input type="checkbox" v-model="checked" :value="checkedList[0]" />{{checkedList[0]}}</label>
    <label><input type="checkbox" v-model="checked" :value="checkedList[1]" />{{checkedList[1]}}</label>
    <label><input type="checkbox" v-model="checked" v-bind:value="checkedList[2]" />{{checkedList[2]}}</label>
    <br>
    <span >체크한지역 : {{checked}}</span>

    <br>
    <div>
        <img :src="imgSrc" />
    </div>

</template>
<script>
export default {
  data () {
    return {
      htmlString: '<p style="color:red;">Str</p>',
      valueModel: 'southKorea',
      checked: [],
      checkedList: ['서울', '대구', '부산']
      // imgSrc: 'https://kr.vuejs.org/images/logo.png'
    }
  }
}
</script>
