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
      this.productList = await this.$api('http://opendata.kwater.or.kr/openapi-data/service/pubd/dam/excllncobsrvt/mntrf/list?serviceKey=B%2FQtKR%2B%2FBNpNL8fPGGQ%2F%2FWRr5RCS%2FNqUkwsluZQ9GYhtFN73KdcFzwyxIAo7GCgAwQr2V3qgXzHAn9yA4zwjiw%3D%3D&sdate=2014-12-01&stime=08&edate=2014-12-01&etime=15&excll=1012432&tms=10&numOfRows=10&pageNo=1', 'get')
    }
  }
}
</script>

<style>

</style>
