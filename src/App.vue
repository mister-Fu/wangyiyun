<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="music" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="circle" to="/boke">博客</van-tabbar-item>
      <van-tabbar-item icon="music-o" to="/mine">我的</van-tabbar-item>
      <van-tabbar-item icon="search" to="/keige">K歌</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/yuncun">云村</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "0",
    };
  },
  components: {},
};
</script>

<style></style>
