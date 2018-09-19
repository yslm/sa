<template>
  <div class="dialog" v-show="show">
    <transition name="bounce">
    <div class="content" v-if="show">
      <div class="content-body">
        <span  @click="cancelBtn" class="close-ico"></span>

        <div class="tip-content" >
          <p dir="rtl" class="content-title">تهانينا لقد ربحت</p>
          <p class="content-text" v-if="content">{{content}} <span class="text-coins">coins</span></p>
        </div>
        <footer>
          <button v-if="cancel"  @click="cancelBtn" class="btn cancel">{{cancel}}</button>
          <button @click="confirmBtn" class="btn active">{{confirm}}</button>
        </footer>
        <p dir="rtl" class="tips-text">يمكنك التحقق من قائمتى الشخصية _ جوائزى</p>
      </div>
    </div>
  </transition>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        show: false,
        title: "提示",
        content: "",
        confirm: "确定",
        cancel: "",
        className: "",
      }
    },
    methods:{
      confirmBtn(){
        console.log('点击确认按钮');
        this.show=false;

      },
      cancelBtn(){
        console.log('点击取消按钮');
        this.show=false;
      }
    }
  }

</script>
<style scoped lang="scss">
  .dialog{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(10, 43, 58, 0.7);
    z-index: 500;
  }

  .tip-content{
    padding-top:0.3rem;
    text-align: center;
    .content-title{
      color: #5B1B2D;
      font-size:0.2rem;
      font-weight:bold;
    }

  }


  .content {
    position: absolute;
    width: 3.1rem;
    height:2.5rem;
    padding-bottom:0.2rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:auto;
    color: #555;
    background-color: #FEDD89;
    .content-body {
      position: relative;

      font-size:0.12rem;

      color: #fff;

    }
    footer{

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .btn{
      font-weight: bold;
      width:2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      /*padding: 0 0.1rem;*/
      border-radius: 0.05rem;
      font-size: 0.16rem;
      margin-top:0.2rem;
      font-family:Cairo;

      &.cancel{
        color: RGBA(108, 83, 48, 1);


      }
      &.sure{
        color: #FFBC16;
        background-color: #6E2A2E;

      }
      &.active{
        color: #FFBC16;
        background-color: #6E2A2E;
      }

    }

  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .close-ico{
    position: absolute;
    display: inline-block;
    width: 0.16rem;
    height: 0.16rem;
    top: 0.1rem;
    right:0.1rem;
    background: url("./img/close-ico.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  .content-text{
    color: #00835C;
    font-size: 0.36rem;
    font-weight:bold;
  }
  .text-coins{
    color: #A24B18;
    font-size: 0.14rem;
    line-height:0.18rem;
    font-family:Cairo;
    /*margin-left:0.05rem;*/
  }
  .tips-text{
    color: #727272;
    font-size:0.12rem;
    text-align: center;
    margin-top:0.1rem;
  }




  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0.2);
    }
    100% {
      transform: scale(1);
    }
  }


</style>
