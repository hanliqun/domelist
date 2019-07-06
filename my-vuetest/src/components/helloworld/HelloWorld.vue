<template>
  <div class="hello">
    <!-- <h1>state</h1> -->
    <!-- <h2>{{$store.state.count}}</h2> -->  <!-- 获取vuex的方法一 -->
    <!-- <h2>{{count}}</h2>
    <h2>{{num}}</h2> -->

    <!-- <h1>getter</h1>
    <div>
      <h2>$store.getters.add---{{$store.getters.add}}</h2>
      <h2>...mapGetters(['add'])---{{add}}</h2>
      <h2>return this.$store.getters.add---{{count}}</h2>
    </div> -->

    <h1>mutaitions</h1>
    <h2>{{num}}</h2>
    <h2>{{text}}</h2>
    <div>
      <button @click="$store.commit('add',{text:'增加20',amount:20})">增加+++</button>
      <button @click="$store.commit('reduce')">减少---</button>
      <button @click='add({text:"增加10",amount:10})'>...mapMutations++++</button>
      <button @click='reduce'>...mapMutations----</button>
    </div>

    <!-- <h1>actions</h1>
    <div>
      <h2>{{num}}</h2>
      <h2>{{text}}</h2>
      <button @click="addaction">增加actions</button>
      <button @click="$store.dispatch('reduceaction')">减少actions</button>
    </div> -->

    <div>
      <h1>列表跳转</h1>
      <ul>
        <li v-for="(item, index) in list" @click="goModel(item.id)">{{index+1}}==={{item.name}}</li>
      </ul>
    </div>

    <router-link to="zhiling">
      <button>指令页面</button>
    </router-link>
  </div>
</template>

<script>
// 方法三 mapState （01）
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        {name: '111111', id: 1},
        {name: '222222', id: 2},
        {name: '333333', id: 3},
        {name: '444444', id: 4},
        {name: '555555', id: 5}
      ],
      id: 43
    }
  },
  // computed: { // 方法二 在计算属性里
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  // computed: mapState({
  //   count: state => state.count,
  //   num: state => state.num
  // })
  // computed: { // 方法三 mapState （02）
  // ...mapState({
  //   count: state => state.count,
  //   num: state => state.num
  // })
  // ...mapState(['count', 'num']) // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // },
  // computed: {
  // ...mapGetters(['num']), // getters方法二
  // count() { // getters方法三
  //   return this.$store.getters.add
  // }
  // },
  computed: {
    ...mapState(['num', 'text'])
  },
  methods: { // 点击事件写在methods内
    ...mapMutations(['add', 'reduce']),
    // ...mapActions(['addaction'])
    goModel (index) {
      this.$router.push({ // params和name一起使用
        name: 'List',
        params: {
          id: index
        }
      })
      // this.$router.push({path: '/list', query: { // query和path一起使用
      //   id: index
      // }})
      this.$router.push({
        path: `/describe/${id}`,
      })
    }
  }
  // methods:mapMutations(['add', 'reduce']) //简写
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
