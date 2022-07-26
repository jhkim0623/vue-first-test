<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
               <tr :key="i" v-for="(product,i) in productList" >
                    <td>{{ product.name }}</td>
                    <td>{{product.price}}</td>
               </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getList2()
  },
  methods: {
    async getList2 () {
      this.productList = await this.$api('https://c6a01069-7e3a-454e-82e6-40553fc6cbd1.mock.pstmn.io/list', 'get')
    }
  }
}
</script>

<style>

</style>
