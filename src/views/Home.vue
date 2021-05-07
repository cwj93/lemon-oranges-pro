<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: CHENWJ
 * @Date: 2021-05-07 10:25:28
 * @LastEditors: CHENWJ
 * @LastEditTime: 2021-05-07 14:54:44
-->
<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about2/about3">threeAbout</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
