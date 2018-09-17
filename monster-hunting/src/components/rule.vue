<template>
  <div class="rule">
    <div class="rule-title" dir="rtl">القوانين والجوائز
      <button @click="clsR" class="close-ico"></button>
    </div>
    <!--活动背景-->
    <div class="event-background">
      <div class="top-title">
        <div class="left-line"></div>
        <p dir="rtl" class="title-text">قصة ما وراء المسابقة</p>
        <div class="right-line"></div>
      </div>
      <p dir="rtl">في عام 2018 ميلاديا جاء أحد الوحوش المفترسة من الهاوية وقام باختراق عالم LOOPS، هذا الوحش قسم نفسه الى خمسة أجزاء قامت باختراق عالم البث الخاص بـ LOOPS وتخريبه، وقام الـ Looper   بحمل أسلحتهم ومحاربة هذا الوحش ومحاولة ارجاعه مرة اخري الى عالمه السحيق. </p>
    </div>

    <!--活动规则-->
      <div class="rule-title-line">
        <div class="left-line"></div>
        <div class="title-text" dir="rtl">قوانين المسابقة</div>
        <div class="right-line"></div>
      </div>

    <!--第一部分内容-->
    <div class="items">
      <div class="left" dir="rtl">ستكون فاعلية هذه المسابقة من 2018.09.18- 10.02</div>
      <div class="right">.1</div>
    </div>
    <div class="items">
      <div class="left" dir="rtl">   سيكون الوحش موجود في صفحة المسابقة، وفى كل غرفة بث مباشر ستتواجد الأجزاء الخمسة للوحش، وكلما قام المعجبين بإرسال الهدايا الخاصة بالمسابقة خلال البث سيؤدى ذلك لتدمير أحد اجزاءه وكذلك الوحش نفسه.</div>
      <div class="right">.2</div>
    </div>
    <div class="items">
      <div class="left" dir="rtl">يحتاج كل مضيف تدمير الأجزاء الخمسة للوحش حسب التسلسل، وسيتم إسالة دماء كل جزء من الخمس أجزاء منفصلة وهى كالأتى :</div>
      <div class="right">.3</div>
    </div>

    <!--表格1-->
    <table class="tab tab1" cellspacing="0" cellpadding="0">
      <tr>
        <td dir="rtl">كمية إسالة الدماء</td>
        <td dir="rtl">مستوى أجزاء الوحش</td>
      </tr>
      <tr>
        <td>4000</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8000</td>
        <td>2</td>
      </tr>
      <tr>
        <td>12000</td>
        <td>3</td>
      </tr>
      <tr>
        <td>16000</td>
        <td>4</td>
      </tr>
      <tr>
        <td>20000</td>
        <td>5</td>
      </tr>

    </table>

    <!--4-->
    <div class="items">
      <div class="left" dir="rtl">تقوم Loops   بتقديم أربعة أنواع من الأسلحة في صورة هدايا، في البداية تقدم هدايا القوس والسيف ثم بعد حدوث تدمير بنسبة للوحش بنسبة (1.5m，5m)، يتم فتح هدايا أخرى للمستخدمين، ويكون تأثير الأسلحة تجاه مستويات تدمير الوحش كالتالي:</div>
      <div class="right">.4</div>
    </div>
    <!--表格二-->
    <table class="tab tab1" cellspacing="0" cellpadding="0">

      <tr>
        <td>Exp</td>
        <td dir="rtl">قيمة الكوينز</td>
        <td dir="rtl">قيمة الهجوم</td>
        <td dir="rtl">الهدية</td>
        <td dir="rtl">ميعاد الظهور</td>
      </tr>
      <tr>
        <td>10</td>
        <td>2</td>
        <td>1</td>
        <td dir="rtl">قوس</td>
        <td dir="rtl">مع بداية المسابقة</td>
      </tr>
      <tr>
        <td>5000</td>
        <td>1000</td>
        <td>500</td>
        <td dir="rtl">سيف</td>
        <td dir="rtl">مع بداية المسابقة</td>
      </tr>
      <tr>
        <td>10005</td>
        <td>2000</td>
        <td>1200</td>
        <td dir="rtl">قنبلة</td>
        <td dir="rtl">عند وصول نسبة تدمير الوحش إلى 1.5m</td>
      </tr>
      <tr>
        <td>12510</td>
        <td>2500</td>
        <td>1500</td>
        <td dir="rtl">مدفع</td>
        <td dir="rtl">عند وصول نسبة تدمير الوحش إلى 5m</td>
      </tr>
    </table>
    <!--5-->
    <div class="items">
      <div class="left" dir="rtl">عندما تصل نسبة الضرر في جسم الوحش إلى (1.5m，5m，10m) فإن جميع المستخدمين الذين ساعدوا في حدوث هذا الضرر سيحصلون على جوائز مقسمة على ثلاث مراحل، في كل مرحلة يتم توزيع الجوائز مرة واحدة، ويمكن للمستخدمين الذين ربحوا الجوائز الحصول عليها من خلال الضغط على " انقر لاستلام الجائزة " وسيتم وصول الجوائز خلال 24 ساعة الى حسابهم، وإذا لم يستلم المستخدم الجائزة خلال فترة المسابقة فإنه لن يستطيع جمعها مرة أخرى.</div>
      <div class="right">.5</div>
    </div>

    <!--6-->
    <div class="items">
      <div class="left" dir="rtl">سيتم نشر قائمة الجوائز خلال 14 يوم من انتهاء المسابقة </div>
      <div class="right">.6</div>
    </div>

    <!--7-->
    <div class="items">
      <div class="left" dir="rtl">في حالة اكتشاف قيام أي مستخدم بالتلاعب للحصول على نقاط إضافية بطريقة غير قانونية، سيتم إلغاء نتائج المسابقة له وفرض عقوبات عليه، جميع حقوق هذه المسابقة محفوظة لـ Loops </div>
      <div class="right">.7</div>
    </div>

    <!--活动奖励部分-->
    <div class="rule-title-line">
      <div class="left-line"></div>
      <div class="title-text" dir="rtl">جوائز المسابقة</div>
      <div class="right-line"></div>
    </div>
    <div class="items">
      <div class="left" dir="rtl">جوائز البث</div>
      <div class="right">.1</div>
    </div>
    <table class="tab tab2" cellpadding="0" cellspacing="0">
      <tr>
        <td dir="rtl" colspan="3">الجوائز</td>
        <td dir="rtl" rowspan="2">قائمة الإصابات</td>
      </tr>
      <tr>
        <td dir="rtl">نقاط الشرف</td>
        <td>Exp</td>
        <td>Diamonds</td>
      </tr>
      <tr>
        <td>500</td>
        <td>3000</td>
        <td>5000</td>
        <td>1</td>
      </tr>
      <tr>
        <td>300</td>
        <td>2000</td>
        <td>3000</td>
        <td>2</td>
      </tr>
      <tr>
        <td>100</td>
        <td>1000</td>
        <td>1000</td>
        <td>3</td>
      </tr>
    </table>

    <p dir="rtl" class="tab-info">ستضاف نقاط الشرف الى قائمة بثوث شهر 10 </p>

    <div class="items">
      <div class="left" dir="rtl">جوائز المستخدمين</div>
      <div class="right">.2</div>
    </div>
    <table class="tab tab2" cellspacing="0" cellpadding="0">
      <tr>
        <td dir="rtl" colspan="3">الجوائز</td>
        <td dir="rtl" rowspan="2">قائمة ترتيب المستخدمين</td>
        <td dir="rtl" rowspan="2">قائمة ترتيب المضيفين</td>
      </tr>
      <tr>
        <td dir="rtl">الهدية</td>
        <td>Exp</td>
        <td dir="rtl">كوينز</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 9 أيام</td>
        <td>5000</td>
        <td>3000</td>
        <td>1</td>
        <td rowspan="3" class="last-td">1</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 8 أيام</td>
        <td>4000</td>
        <td>2600</td>
        <td class="bdr-none">2</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 7 أيام</td>
        <td>3000</td>
        <td>2100</td>
        <td class="bdr-none">3</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 6 أيام</td>
        <td>3000</td>
        <td>2000</td>
        <td>1</td>
        <td rowspan="3" class="last-td">2</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 5 أيام</td>
        <td>2000</td>
        <td>1600</td>
        <td class="bdr-none">2</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 4 أيام</td>
        <td>1000</td>
        <td>1100</td>
        <td class="bdr-none">3</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 3 أيام</td>
        <td>1000</td>
        <td>1000</td>
        <td>1</td>
        <td rowspan="3" class="last-td">3</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 2 يوم</td>
        <td>700</td>
        <td>600</td>
        <td class="bdr-none">2</td>
      </tr>
      <tr>
        <td dir="rtl">هدية ( قنبلة + مدفع ) لمدة 1 يوم</td>
        <td>500</td>
        <td>100</td>
        <td class="bdr-none">3</td>
      </tr>
    </table>
    <p dir="rtl" class="tab-info">سيتم توزيع الجوائز بعد انتهاء المسابقة خلال 14 يوم عمل، وعلى المستخدمين الذين ربحوا الهدايا الخاصة بالمسابقة استخدامها خلال فترة الصلاحية المعلنة، ويمكنك إرسال الهدايا خلال فترة الصلاحية بأعداد غير محدودة (تحتاج لإنفاقcoins  ( وستضاف إليك نقاط exp إضافية أيضا ،وبعد انتهاء الصلاحية ستعود الهدايا إلى Loops مرة أخري .</p>

    <div class="items">
      <div class="left" dir="rtl">جوائز المضيف لإصابته اجزاء الوحش</div>
      <div class="right">.3</div>
    </div>
    <table class="tab tab2" cellpadding="0" cellspacing="0">
      <tr>
        <td dir="rtl" colspan="2">جوائز المضيفين لإكمال مهمة إصابة أجزاء الوحش</td>
        <td dir="rtl" rowspan="2">مستوى أجزاء الوحش</td>
      </tr>
      <tr>
        <td>Exp</td>
        <td dir="rtl">إطار صورة مميز</td>
      </tr>
      <tr>
        <td>1000</td>
        <td dir="rtl">إطار صورة مميز لمدة 3 ساعة </td>
        <td class="last-td">1</td>
      </tr>
      <tr>
        <td>1500</td>
        <td dir="rtl">إطار صورة مميز لمدة 5 ساعة </td>
        <td class="last-td">2</td>
      </tr>
      <tr>
        <td>2000</td>
        <td dir="rtl">إطار صورة مميز لمدة 7 ساعة </td>
        <td class="last-td">3</td>
      </tr>
      <tr>
        <td>3000</td>
        <td dir="rtl">إطار صورة مميز لمدة 12 ساعة </td>
        <td class="last-td">4</td>
      </tr>
      <tr>
        <td>5000</td>
        <td dir="rtl">إطار صورة مميز لمدة 24 ساعة </td>
        <td class="last-td">5</td>
      </tr>
    </table>
    <p dir="rtl" class="tab-info">سيتم توزيع الجوائز خلال 24 ساعة </p>

    <!--<p v-if="isIos" dir="rtl" class="tab-info">شركة آبل(Apple) لا تتحمل أي مسئولية وليست راعية لهذه الفعالية.</p>-->
    <div class="items"  v-if="isIos">
      <div class="left" dir="rtl">شركة آبل(Apple) لا تتحمل أي مسئولية وليست راعية لهذه الفعالية.</div>
      <div class="right">.4</div>
    </div>



  </div>

</template>
<script>
  export default {
    data(){
      return{
        isIos:false

      }
    },
    methods:{
      clsR(){
        this.$emit('closeR');
      },
      checkOs(){
        var res = this.getMobileOperatingSystem();
//        console.log(res);
        if(res=='iOS'){
//          console.log('66666');
          //显示提示语
          this.isIos=true;
        }
      }
    },
    mounted(){
      this.checkOs();

    }
  }


</script>
<style lang="scss" scoped>
  .rule{
    /*background-color: #fff;*/
    position: relative;
    color: #000;
    margin-bottom:1rem;
    background-color: #FEDD89;
    padding:0.3rem 0.14rem;
    font-size:0.12rem;
    .rule-title{
      position: absolute;
      width: 100%;
      height: 0.3rem;
      line-height:0.3rem;
      left: 0;
      top: 0;
      background-color: #6E2A2E;
      font-size: 0.14rem;
      color: #FFBC16;
      font-weight:bold;
      .close-ico{
        right: 0.1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    /*活动背景*/
    .event-background{
      /*width: 3.12rem;*/
      position: relative;
      padding: 0.14rem 0.06rem;
      background-color: #face5e;
      color: #A24B18;
      /*font-size:0.12rem;*/
      margin:0.18rem auto;
      border: 1px solid #e09a4b;
      border-top:none;
      .top-title{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 0.2rem;
        left: 0;
        top: -0.1rem;
        .left-line,.right-line{
          flex: 1;
          height: 1px;
          background-color: #e09a4b;
        }


      }
      &>p{
        text-align: right;
      }

    }

    .title-text{
      color: #541928;
      /*font-size:0.12rem;*/
      font-weight:bold;
      margin:0 0.04rem;
    }

    /*活动规则*/
    /*规则标题*/
    .rule-title-line{
        height: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .left-line{
          flex: 1;
          height: 1px;
          background-image: linear-gradient(to right,#fedd89,#e09a4b);
        }
        .right-line{
          flex: 1;
          height: 1px;
          background-image: linear-gradient(to right,#e09a4b,#fedd89);
        }



      }

    .items{
      /*font-size:0.12rem;*/
      display: flex;
      margin-bottom:0.08rem;
      .left{
        flex: 1;
        text-align: right;
        line-height: 0.2rem;
        color: #A24B18;
      }
      .right{
        width: 0.1rem;
        color: #893522;
        line-height: 0.2rem;
        margin-left:0.04rem;
      }
    }

    /*表格1*/
    .tab{
      width: 100%;
    }
    .tab1{
      margin-bottom:0.16rem;
      tr{
        td{
          border: 1px solid #D27F12;
          color: #AF5C14;
          padding:0.02rem 0.04rem;
          /*font-weight:bold;*/
          &:not(:last-of-type){
            border-right:none;
          }
          &:last-of-type{
            background-color: #face5e;
            color: #541928;
          }
        }
        &:nth-of-type(1){
          td{
            background-color: #B75F20;
            color: #FFBD19;
          }
        }
        &:nth-of-type(n+2){
          td{
            border-top:none;
          }

        }
      }
    }
    .tab2{
      /*font-size:0.12rem;*/
      tr{
        td{
          border: 1px solid #D27F12;
          color: #D27F12;
          padding:0.02rem 0.04rem;
          &:not(:last-of-type){
            border-right:none;
          }
          &.bdr-none{
            border-right:none;
          }
          &.last-td{
            background-color: #face5e;
            color: #541928;
          }
        }
        &:nth-of-type(1){
          td{
            background-color: #B75F20;
            color: #FFBD19;
          }
        }
        &:nth-of-type(2){
          td{
            background-color: #f6af1e;
          }
        }

        &:nth-of-type(n+2){
          td{
            border-top:none;
          }

        }
      }
    }
    .tab-info{
      text-align: right;
      color: #541928;
    }


  }

</style>
