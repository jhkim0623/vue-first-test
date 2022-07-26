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
    <br>
    <div>
        <h3></h3>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='b'">B</h1>
        <h1 v-else>C</h1>
    </div>
    <div>
        <button type="button" @click="cntPlus">A D D</button>
        <p>the Counter is : {{counter}}</p>
    </div>
    <div>
        <select v-model="selectedVal" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
    <br>
    <h3>Full Name : {{fullName}}</h3>
</template>
<script>
export default {
  data () {
    return {
      productList: [
        { name: 'test1', price: 1000 },
        { name: 'test2', price: 2333 },
        { name: 'test3', price: 2235 }
      ],
      type: 'A',
      counter: 0,
      selectedVal: '',
      firstName: 'Son',
      lastName: 'min',
      fullName: ''
    }
  },
  methods: {
    cntPlus () {
      this.counter = this.counter + 1
    },
    changeSelect () {
      alert(this.selectedVal)
    }
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + '' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  }

}
</script>
    <style scoped>
        .container {
            width :100%;
            height : 200px;
        }
        .active {
            backgroundcolor : yellow;
            font-weight : bold
        }
        .text-red {
            color :skyblue;
        }
    </style>
