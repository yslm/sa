<template>
  <div class="gift">
    <!--宝剑-->
    <div class="content" v-if="giftNum==1">
      <img class="arms-ico" src="./images/knife2.png" alt="">
      <div class="desc-info">
        <div class="info-title">
          <div class="left-line"></div>
          <p class="title-text" dir="rtl">سيف</p>
          <div class="right-line"></div>
        </div>
        <p class="color-green">500 <span class="color-orange" dir="rtl" >قيمة الهجوم:</span></p>
        <p class="color-green">5000EXP <span class="color-orange" dir="rtl">قيمة الخبرة المكتسبة:</span></p>
        <div>
          <span dir="rtl" class="color-orange">مواقع الضرب:</span>
          <span class="color-green" dir="rtl">يدين الوحش</span>
        </div>
      </div>
    </div>
    <!--弓箭-->
    <div class="content" v-if="giftNum==2">

      <img class="arms-ico" src="./images/arrow2.png" alt="">
      <div class="desc-info">
        <div class="info-title">
          <div class="left-line"></div>
          <p class="title-text" dir="rtl">قوس</p>
          <div class="right-line"></div>
        </div>
        <p class="color-green">1 <span class="color-orange" dir="rtl" >قيمة الهجوم:</span></p>
        <p class="color-green">500EXP <span class="color-orange" dir="rtl">قيمة الخبرة المكتسبة:</span></p>
        <div>
          <span dir="rtl" class="color-orange">مواقع الضرب:</span>
          <span class="color-green" dir="rtl">وسط الوحش</span>
        </div>
      </div>
    </div>
    <!--大炮-->
    <div class="content" v-if="giftNum==3">

      <img class="arms-ico" src="./images/cannon2.png" alt="">
      <!--<p v-if="!isDeBlock.cannon">还没解锁哦</p>-->
      <div class="unknock">
        <p dir="rtl" class="unknock-title">مغلقة</p>
        <p dir="rtl" class="unknock-text">عندما تصل درجة تدمير الوحش إلى5m حينها يمكن فتح هدية المدفع</p>
      </div>
      <div class="desc-info">
        <div class="info-title">
          <div class="left-line"></div>
          <p class="title-text" dir="rtl">قوس</p>
          <div class="right-line"></div>
        </div>
        <p class="color-green">1 <span class="color-orange" dir="rtl" >قيمة الهجوم:</span></p>
        <p class="color-green">500EXP <span class="color-orange" dir="rtl">قيمة الخبرة المكتسبة:</span></p>
        <div>
          <span dir="rtl" class="color-orange">مواقع الضرب:</span>
          <span class="color-green" dir="rtl">قدمين الوحش</span>
        </div>
      </div>

    </div>
    <!--炸弹-->
    <div class="content" v-if="giftNum==4">
      <img class="arms-ico" src="./images/bomb2.png" alt="">
      <div class="unknock">
        <p dir="rtl" class="unknock-title">مغلقة</p>
        <p dir="rtl" class="unknock-text">عندما تصل درجة تدمير الوحش إلى1.5m حينها يمكن فتح هدية القنبلة</p>
      </div>
      <div class="desc-info">
        <div class="info-title">
          <div class="left-line"></div>
          <p class="title-text" dir="rtl">قنبلة</p>
          <div class="right-line"></div>
        </div>
        <p class="color-green">1200 <span class="color-orange" dir="rtl" >قيمة الهجوم:</span></p>
        <p class="color-green">10005EXP <span class="color-orange" dir="rtl">قيمة الخبرة المكتسبة:</span></p>
        <div>
          <span dir="rtl" class="color-orange">مواقع الضرب:</span>
          <span class="color-green" dir="rtl">رأس الوحش</span>
        </div>
      </div>
      <!--<p v-if="!isDeBlock.boom">还没解锁哦</p>-->
    </div>


  </div>

</template>
<script>
  export default {
    props:['giftNum','isDeBlock'],
    data(){
      return{
        num:0,//当前显示的礼物编号
      }
    }
  }


</script>
<style lang="scss">
  .arms-ico{
    width: 1.3rem;
    height: 1.3rem;
    margin-bottom:0.1rem;
  }
  .unknock{
    padding:0 0.4rem 0.1rem;
    margin-bottom:0.1rem;

  }
  .unknock-title{
    color: #565656;
    font-size: 0.14rem;
    font-weight:bold;
  }
  .unknock-text{
    color: #727272;
    font-size: 0.12rem;
    line-height:0.18rem;
  }



  .desc-info{
    height: 1.06rem;
    position: relative;
    padding-top:0.25rem;
    background-color: #FACE5E;
    font-size: 0.14rem;
    .info-title{
      position: absolute;
      width: 100%;
      height: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      top: -0.1rem;
      .left-line{
        flex: 1;
        height: 1px;
        background-image: linear-gradient(to right,#FACE5E,#e09a4b);
      }
      .right-line{
        flex: 1;
        height: 1px;
        background-image: linear-gradient(to right,#e09a4b,#FACE5E);
      }
      .title-text{
        margin-left: 0.04rem;
        margin-right:0.04rem;
        color: #5B1B2D;
        font-size: 0.2rem;
        font-weight:bold;
      }

    }

  }
  .color-green{
    color: #00835C;
    line-height:0.2rem;
  }
  .color-orange{
    color: #A24B18;
  }

</style>
