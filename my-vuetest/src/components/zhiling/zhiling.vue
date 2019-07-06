<template>
  <div>
    <div class="topbar" v-if="isshow">
      <ul>
        <li v-for="(item, index) in list" :key="index" :class="{active:showIndex==index}" @click="addClass(index)">{{item}}</li>
      </ul>
    </div>
    <button @click="isShow" >切换</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['选项一', '选项二', '选项三', '选项四', '选项五'],
      showIndex: 0,
      isshow: true
    }
  },
  methods: {
    addClass (index) {
      this.showIndex = index
    },
    isShow() {
        this.isshow = !this.isshow
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.topbar {
  width: 500px;
  height: 70px;
  border: 1px solid #ddd;
}
.topbar li {
  list-style: none;
  width: 100px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  float: left;
  cursor: pointer;
}
.active {
  background: pink;
}
</style>
