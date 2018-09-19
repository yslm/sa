<template>
  <div class="rule">
    <div class="rule-title" dir="rtl">القوانين والجوائز
      <button @click="clsR" class="close-ico"></button>
    </div>
    <!--活动背景-->
    <div class="event-background">
      <div class="top-title">
        <div class="left-line"></div>
        <p dir="rtl" class="title-text">خلفية المسابقة</p>
        <div class="right-line"></div>
      </div>
      <p dir="rtl">في عام 2018 ميلاديا جاء وحش مفترس من أعماق الأرض و قام بأختراق عالم Loops. اتى هذا الوحش برفقة 5 من ابنائه و قامو بأختراق عالم البث الخاص بـloops و تخريبه. رداً على ذالك قام  الـ Loopers بحمل أسلحتهم ومحاربة الوحش  لإرغامه على العودة الى عالمه الأسود</p>
    </div>

    <!--活动规则-->
      <div class="rule-title-line">
        <div class="left-line"></div>
        <div class="title-text" dir="rtl">قوانين المسابقة</div>
        <div class="right-line"></div>
      </div>

    <!--第一部分内容-->
    <div class="items">
      <div class="left" dir="rtl">وقت المسابقة من 2018.09.20 الى 2018.10.07 </div>
      <div class="right">.1</div>
    </div>
    <div class="items">
      <div class="left" dir="rtl"> سيكون الوحش موجود على الصفحة الرئيسية للمسابقة، بينما ستتواجد أبناءه ال5 في غرف البث المباشر. كلما قام المعجبين بأرسال الهدايا الخاصة بالمسابقة(قوس، مدفع،سيف، قنبلة) خلال البث، سيؤدي ذالك الى إضعاف و تدمير أبناء الوحش و الوحش على حد سواء</div>
      <div class="right">.2</div>
    </div>
    <div class="items">
      <div class="left" dir="rtl">على المضيف ان يقوم بقتل أبناء الوحش حسب التسلسل، سيتم إحتساب إسالة دماء أبناء الوحش منفصلة و ذالك كالأتي:    </div>
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
      <div class="left" dir="rtl">تقوم   Loops بتقديم اربعة أنواع من الأسلحة على شكل هدايا، في البداية سيتم تقديم السيف و القوص ثم بعد وصول نسبة    تدمير الوحش إلى مليون و 500ألف و 5مليون،  يتم فتح هدايا أخرى للمستخدمين، ويكون تأثير الأسلحة تجاه مستويات      تدمير الوحش كالتالي:</div>
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
        <td dir="rtl">عند وصول نسبة تدمير الوحش إلى مليون و 500ألف</td>
      </tr>
      <tr>
        <td>12510</td>
        <td>2500</td>
        <td>1500</td>
        <td dir="rtl">مدفع</td>
        <td dir="rtl">عند وصول نسبة تدمير الوحش إلى 5مليون</td>
      </tr>
    </table>
    <!--5-->
    <div class="items">
      <div class="left" dir="rtl">عندما تصل نسبة الضرر في جسم الوحش إلى(مليون و 500 ألف，5مليون، 10 مليون) فإن جميع المستخدمين الذين ساعدوا في حدوث هذا الضرر سيحصلون على جوائز مقسمة على ثلاث مراحل، في كل مرحلة يتم توزيع الجوائز مرة واحدة، ويمكن للمستخدمين الذين ربحوا الجوائز الحصول عليها من خلال الضغط على " انقر لاستلام الجائزة " وسيتم وصول الجوائز الى حسابهم خلال 24  ساعة، وإذا لم يستلم المستخدم الجائزة خلال فترة المسابقة فإنه لن يستطيع إستلامها مرة أخرى.</div>
      <div class="right">.5</div>
    </div>

    <!--6-->
    <div class="items">
      <div class="left" dir="rtl">سيتم نشر قائمة الجوائز خلال 14 يوم من انتهاء المسابقة </div>
      <div class="right">.6</div>
    </div>

    <!--7-->
    <div class="items">
      <div class="left" dir="rtl">في حالة اكتشاف قيام أي مستخدم بالتلاعب للحصول على نقاط إضافية بطريقة غير قانونية، سيتم إلغاء نتائج المسابقة وفرض عقوبات عليه، جميع حقوق هذه المسابقة محفوظة لـ Loops </div>
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

    <p dir="rtl" class="tab-info">ستضاف نقاط الشرف إلى قائمة نتائج المضيف في الشهر العاشر</p>

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
    <p dir="rtl" class="tab-info">سيتم توزيع الجوائز خلال 14 يوم من أنتهاء المسابقة وعلى المستخدمين الذين ربحوا الهدايا الخاصة بالمسابقة استخدامها خلال فترة الصلاحية المعلنة، ويمكنك إرسال الهدايا خلال فترة الصلاحية بأعداد غير محدود  (تحتاج لإنفاق coins)
      و سيضاف إلى رصيدك نقاط Exp إضافية.  بعد انتهاء الصلاحية سيتم إغلاق الهدايا  تلقائياً
    </p>

    <div class="items">
      <div class="left" dir="rtl">جوائز المضيف لإصابته أبناء الوحش</div>
      <div class="right">.3</div>
    </div>
    <table class="tab tab2" cellpadding="0" cellspacing="0">
      <tr>
        <td dir="rtl" colspan="2">جوائز المضيفين لإكمال مهمة إصابة أبناء الوحش</td>
        <td dir="rtl" rowspan="2">مستوى أبناء الوحش</td>
      </tr>
      <tr>
        <td>Exp</td>
        <td dir="rtl">إطار صورة مميز</td>
      </tr>
      <tr>
        <td>1000</td>
        <td dir="rtl">إطار صورة مميز لمدة يوم واحد</td>
        <td class="last-td">1</td>
      </tr>
      <tr>
        <td>1500</td>
        <td dir="rtl">إطار صورة مميز لمدة يومين </td>
        <td class="last-td">2</td>
      </tr>
      <tr>
        <td>2000</td>
        <td dir="rtl">إطار صورة مميز لمدة 3 أيام </td>
        <td class="last-td">3</td>
      </tr>
      <tr>
        <td>3000</td>
        <td dir="rtl">إطار صورة مميز لمدة 4 أيام </td>
        <td class="last-td">4</td>
      </tr>
      <tr>
        <td>5000</td>
        <td dir="rtl">إطار صورة مميز لمدة 5 أيام </td>
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
