<template>
  <div class="home">
    <Card class="card-box">
        <div style="text-align:center">
            <h3>柠檬树上柠檬果</h3>
            <img src="../assets/images/lemon-cat.jpg" alt="">
        </div>
    </Card>
    <Card class="card-box">
        <div style="text-align:center">
            <h3>柠檬树下你和我-下拉选择树</h3>
            <selectTree show-checkbox placeholder="柠檬树下你和我"></selectTree>
        </div>
    </Card>
    <Card class="card-box">
        <div style="text-align:center">
            <h3>你在看风景</h3>
        </div>
    </Card>
    <Card class="card-box">
        <div style="text-align:center">
            <h3>我在看你</h3>
        </div>
    </Card>
  </div>
</template>

<script>
import selectTree from '@/b-components/select-tree/index.vue'
export default {
  components: { selectTree },
  name: 'Home',
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.home{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: calc(100vh - 100px);
  max-height: 100vh;

  .card-box{
    width: 49%;
    height: 49%;
  }
}
</style>
