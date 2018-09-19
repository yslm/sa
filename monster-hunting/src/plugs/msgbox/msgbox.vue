<template>
<div class="box-wrap" v-if="show" @touchmove.prevent>
    <transition>
        <div v-if="show" class="msgbox-container" :class="className">
          <div class="content-body">
            <span  @click="cancelBtn" class="close-ico"></span>
            <div class="tip-content" >
              <p dir="rtl" class="content-title">تهانينا لقد ربحت</p>
              <!--<p class="content-text" v-if="content">{{content}} <span class="text-coins">coins</span></p>-->
              <p class="content-text" v-if="content">{{content}}</p>
            </div>
            <footer>
              <button v-if="cancel"  @click="cancelBtn" class="btn cancel">{{cancel}}</button>
              <button @click="successBtn()" class="btn active">{{confirm}}</button>
            </footer>
            <p dir="rtl" class="tips-text">يمكنك التحقق من قائمتى الشخصية _ جوائزى</p>
        </div>

         </div>
    </transition>
      </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      title: "提示",
      content: "",
      confirm: "确定",
      cancel: "",
      className: "",
    }
  },
  beforeMount() {
    //如果已经存在，则阻止出现第二次
    let node = document.querySelector(".msgbox-container");
//    console.log(node && node.parentNode,'+++++++++');
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
  },
  methods: {
    successBtn(msg) {
      this.show = false;
    },
    cancelBtn() {
      this.show = false;
    }
  }

};
</script>
<style lang="scss" scoped>

.box-wrap{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(10, 43, 58, 0.7);
  z-index: 500;
  /*font-size:0.14rem;*/
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

.msgbox-container {
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
/*  transform: translate(-50%, -50%) scale(1, 1);*/
  .content-body {
    /*font-size: 1.5em;*/
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
      /*background-image: linear-gradient(to bottom,RGBA(202, 201, 198, 1),RGBA(145, 143, 139, 1));*/
      /*box-shadow: 0 0.03rem 0.03rem RGBA(18, 18, 18, 0.25);*/
    }
    &.active{
      color: #FFBC16;
      background-color: #6E2A2E;
      /*background-image: linear-gradient(to bottom,RGBA(248, 201, 75, 1),RGBA(224, 160, 49, 1));*/
      /*box-shadow: 0 0.03rem 0.03rem RGBA(18, 18, 18, 0.25);*/
    }

  }

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

</style>
