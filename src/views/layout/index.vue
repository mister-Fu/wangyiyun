<template>
  <div id="layout">
    <van-cell @click="showPopup"><van-icon name="bars" size="40px"/></van-cell>
    <van-popup
      closeable
      v-model="show"
      position="left"
      :style="{ height: '100%' }"
    >
      <div id="wrap">
        <div id="user">付博宇</div>
        <div id="d1"></div>
        <div id="d2"></div>
        <div id="d3"></div>
        <div id="d4"></div>
        <div id="d5" @click="gologin">退出登录/关闭</div>
      </div>
    </van-popup>
    <van-popup
      v-model="show"
      closeable
      position="right"
      :style="{ height: '30%' }"
    >
    </van-popup>
    <van-tabbar route v-model="active">
      <van-tabbar-item icon="music" to="/layout/find">发现</van-tabbar-item>
      <van-tabbar-item icon="circle" to="/layout/boke">博客</van-tabbar-item>
      <van-tabbar-item icon="music-o" to="/layout/mine">我的</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/keige">K歌</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/layout/yuncun"
        >云村</van-tabbar-item
      >
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { show: false, active: 0 };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    gologin() {
      this.$router.push("/login");
      this.show = false;
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
#layout .van-cell {
  width: 40px;
  height: 40px;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
}
#layout .van-popup {
  width: 80%;
  height: 100%;
  background-color: #f5f5f5;
}
#wrap {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

#user {
  width: 100%;
  height: 40px;
  background-color: aqua;
}
#d1 {
  width: 85%;
  height: 100px;
  margin: 30px auto;
  border-radius: 15px;
  background-color: #9c9c9c;
}
#d2 {
  width: 85%;
  height: 150px;
  margin: 0px auto;
  border-radius: 15px;
  background-color: #ffffff;
}
#d3 {
  width: 85%;
  height: 150px;
  margin: 20px auto;
  border-radius: 15px;
  background-color: #ffffff;
}
#d4 {
  width: 85%;
  height: 70px;
  margin: 20px auto;
  border-radius: 15px;
  background-color: #ffffff;
}
#d5 {
  width: 85%;
  height: 35px;
  margin: 10px auto 0;
  border-radius: 15px;
  background-color: #ffffff;
  color: red;
  line-height: 35px;
  text-align: center;
  font-weight: 800;
}

.van-popup--right {
  display: none;
}
</style>
<style>
#layout .van-overlay {
  width: 0%;
  background-color: aqua !important;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
}
</style>
