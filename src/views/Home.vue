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
    <Card class="card-box flex">
        <div style="text-align:center">
            <h3>你在看风景<span style="color: #ffffff;">-css3实现播放器效果</span></h3>
            <div class="music-box">
              <div class="music-box-1">
                <div class="music-item item1"></div>
                <div class="music-item item2"></div>
                <div class="music-item item3"></div>
                <div class="music-item item4"></div>
                <div class="music-item item5"></div>
              </div>
              <div class="music-box-2">
                <div class="music-item item1"></div>
                <div class="music-item item2"></div>
                <div class="music-item item3"></div>
                <div class="music-item item4"></div>
                <div class="music-item item5"></div>
              </div>
            </div>
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
  overflow: scroll;

  .card-box{
    width: 49%;
    height: 49%;
    min-width: 800px;
    min-height: 400px;
    margin-bottom: 1%;
  }
}

.music-box{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 350px;
  max-height: 350px;
  width: 100%;
  padding: 0 10px;
  justify-content: space-around;

  .music-box-1{
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
  .music-box-2{
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
  .music-item{
    width: 10%;
    height: 320px;
    max-height: 320px;
    padding: 10px 10px 0 10px;
    margin-top: 20px;
    background: #29c8f7;

    &.item1{
      animation: waves 0.8s linear 0s infinite alternate;
      -webkit-animation: waves 0.8s linear 0s infinite alternate;
    }
    &.item2{
      animation: waves 0.9s linear 0s infinite alternate;
      -webkit-animation: waves 0.9s linear 0s infinite alternate;
    }
    &.item3{
      animation: waves 1s linear 0s infinite alternate;
      -webkit-animation: waves 1s linear 0s infinite alternate;
    }
    &.item4{
      animation: waves 0.8s linear 0s infinite alternate;
      -webkit-animation: waves 0.8s linear 0s infinite alternate;
    }
    &.item5{
      animation: waves 0.9s linear 0s infinite alternate;
      -webkit-animation: waves 0.9s linear 0s infinite alternate;
    }
  }

  @-webkit-keyframes waves {
    10% {
      height: calc(20% - 20px);
    }
    20% {
      height: calc(40% - 20px);
    }
    40% {
      height: calc(60% - 20px);
    }
    50% {
      height: calc(100% - 20px);
    }
    100% {
      height: calc(50% - 20px);
    }
  }

  @keyframes waves {
    10% {
      height: calc(20% - 20px);
    }
    20% {
      height: calc(40% - 20px);
    }
    40% {
      height: calc(60% - 20px);
    }
    50% {
      height: calc(100% - 20px);
    }
    100% {
      height: calc(50% - 20px);
    }
  }
}
</style>
