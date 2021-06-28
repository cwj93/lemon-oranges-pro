<!--
 * @Author: chenwenju
 * @Date: 2021-06-22 21:58:49
 * @LastEditTime: 2021-06-28 21:58:00
 * @LastEditors: Please set LastEditors
 * @Description: 页面布局
 * @FilePath: \lemon-oranges-pro\src\Layout\index.vue
-->
<template>
  <div class="layout" :style="{display: 'flex', flexDirection: 'column', height: '100vh'}">
    <Header :style="{padding: 0}" class="layout-header-bar">
      <div class="header-title">柠檬树上柠檬果 柠檬树下你和我</div>
      <div class="header-function">
        <span>欢迎您 <span style="font-weight: bold;text-decoration: underline;cursor: pointer;">陈文鞠</span></span>
        <span style="padding: 0 10px;">|</span>
        <span style="cursor: pointer;">修改密码</span>
      </div>
      <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon> -->
    </Header>
    <Layout :style="{flex: 1}">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="/home" theme="dark" width="auto" :class="menuitemClasses" @on-select="onMenuSelect">
          <MenuItem name="/home">
            <Icon type="ios-navigate"></Icon>
            <span>首页</span>
          </MenuItem>
          <MenuItem name="/about">
            <Icon type="ios-search"></Icon>
            <span>About</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse();
    },
    onMenuSelect(name) {
      this.$router.push(name)
    }
  }
}
</script>

<style lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: url('../assets/images/header-bg.png')!important;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ffffff;
  }
  .header-title{
    color: #ffffff;
    font-size: 20px;
    text-indent: 40px;
  }
  .header-function{
    width: 300px;
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>