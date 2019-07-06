<template>
  <div>
    <!-- <h2>list</h2>
    <h2>{{id}}</h2>
    <div>
      <h3>fileter</h3>
      <p>{{num1 | jisuan}}</p>
      <p>{{num2 | jisuan}}</p>
      <p>{{num3 | jisuan}}</p>
    </div> -->
    <div>
      <h3>v-for</h3>
      <ul>
        <li v-for="(item, index) in datas" ref="getNode">{{item.a}}&nbsp;&nbsp;&nbsp;{{item.name}}</li>
      </ul>
    </div>
    <div>
      <h3>watch</h3>
      <input type="text" v-model="input" ref="inputRef">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      num1: 23.2154,
      num2: 445.6887,
      num3: 48784.7878,
      datas: [
        {a: 11, name: 'hahaha'},
        {a: 22, name: 'hehehe'},
        {a: 33, name: 'gagaga'}
      ],
      input: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    this.$nextTick(() => {
      console.log(this.$refs.inputRef)
    })
  },
  mounted () {
    console.log(this.$refs.getNode)
  },
  filters: {
    jisuan (value) {
      return parseInt(value)
    }
  },
  watch: {
    input: { // 绑定给input事件
      deep: true, // 深度监听
      handler: function (newVal, oldVal) {
        console.log('newValue', newVal)
        console.log('oldValue', oldVal)
      }
    }
  }
}
</script>
