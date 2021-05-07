<!--
 * @Description: 页面布局
 * @Version: 1.0
 * @Autor: CHENWJ
 * @Date: 2021-05-07 14:45:56
 * @LastEditors: CHENWJ
 * @LastEditTime: 2021-05-07 14:55:24
-->
<template>
  <div class="layouts">
    <div class="layout-left">
      <div>左侧菜单栏</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about2">secondAbout</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="layout-right">
      <div>右侧内容栏</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .layouts{
    display: flex;
    justify-content: space-around;
  }
</style>