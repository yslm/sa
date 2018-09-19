
<!--个人中心-->
<template>
  <div class="personal-center">
    <div class="personal-title" dir="rtl">مهمتى
      <button @click.prevent="close" class="close-ico"></button>
    </div>

    <div class="my-task-wrap">
      <div class="personal-title-line">
        <div class="left-line"></div>
        <div class="title-text" dir="rtl">قوانين المسابقة</div>
        <div class="right-line"></div>
      </div>
      <div class="my-task">
        <div class="left">
          <span class="task-num">{{checkSteps}}</span>
          <span dir="rtl" class="task-label">أجزاء الهجوم الحالى:</span>
        </div>
        <div class="right">
          <span class="task-num">{{rank}}</span>
          <span dir="rtl" class="task-label">ترتيب المضيفين الحالى:</span>
        </div>
      </div>

      <!--然后是当前攻击的分身展示部分-->
      <div class="monster-tab">
        <ul class="monster-list" >
          <li class="monster-item first-monster" :class="{active:num===1}" @click="choose(1)">
            <img class="monster-ico" src="./images/baby1.png" v-if="checkSteps<1" alt="">
            <img class="monster-ico" src="./images/baby1-active.png" v-if="checkSteps>=1" alt="">
            <div class="monster-desc" v-if="num===1">
              <p dir="rtl" class="monster-desc-label">نسبة الدماء:</p>
              <p class="monster-desc-num">4000</p>
              <div  v-if="num===checkSteps">
                <p dir="rtl" class="monster-desc-label">الأجزاء المتضررة:</p>
                <p dir="rtl" class="monster-desc-num">{{showDamage}}</p>
              </div>
              <p v-if="num<checkSteps" dir="rtl" class="monster-desc-label">فشل الهجوم</p>
            </div>
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=1}"></li>
          <li class="monster-item" :class="{active:num===2}" @click="choose(2)">
            <img class="monster-ico" src="./images/baby2.png" v-if="checkSteps<2" alt="">
            <img class="monster-ico" src="./images/baby2-active.png" v-if="checkSteps>=2" alt="">

            <div class="monster-desc" v-if="num===2">
              <p dir="rtl" class="monster-desc-label">نسبة الدماء:</p>
              <p class="monster-desc-num">8000</p>
              <!--<p class="monster-desc-num">8000: <span dir="rtl" class="monster-desc-label">نسبة الدماء</span></p>-->
              <div  v-if="num===checkSteps">
                <p dir="rtl" class="monster-desc-label">الأجزاء المتضررة:</p>
                <p dir="rtl" class="monster-desc-num">{{showDamage}}</p>
              </div>
        <!--      <p v-if="num===current_num" dir="rtl" class="monster-desc-num">{{personal.my_task.injury_value}} <span dir="rtl" class="monster-desc-label">الأجزاء المتضررة</span> </p>-->
              <p v-if="num<checkSteps" dir="rtl" class="monster-desc-label">فشل الهجوم</p>
            </div>
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=2}"></li>
          <li class="monster-item" :class="{active:num===3}" @click="choose(3)">
            <img class="monster-ico" src="./images/baby3.png" v-if="checkSteps<3" alt="">
            <img class="monster-ico" src="./images/baby3-active.png" v-if="checkSteps>=3" alt="">
            <div class="monster-desc" v-if="num===3">
              <p dir="rtl" class="monster-desc-label">نسبة الدماء:</p>
              <p class="monster-desc-num">12000</p>

              <!--<p class="monster-desc-num">12000: <span dir="rtl" class="monster-desc-label">نسبة الدماء</span></p>-->
              <div  v-if="num===checkSteps">
                <p dir="rtl" class="monster-desc-label">الأجزاء المتضررة:</p>
                <p dir="rtl" class="monster-desc-num">{{showDamage}}</p>
              </div>
             <!-- <p v-if="num===current_num" dir="rtl" class="monster-desc-num">{{personal.my_task.injury_value}} <span dir="rtl" class="monster-desc-label">الأجزاء المتضررة</span> </p>-->
              <p v-if="num<checkSteps" dir="rtl" class="monster-desc-label">فشل الهجوم</p>
            </div>
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=3}"></li>
          <li class="monster-item" :class="{active:num===4}" @click="choose(4)">
            <img class="monster-ico" src="./images/baby4.png" v-if="checkSteps<4" alt="">
            <img class="monster-ico" src="./images/baby4-active.png" v-if="checkSteps>=4" alt="">
            <div class="monster-desc" v-if="num===4">
              <p dir="rtl" class="monster-desc-label">نسبة الدماء:</p>
              <p class="monster-desc-num">16000</p>
              <div  v-if="num===checkSteps">
                <p dir="rtl" class="monster-desc-label">الأجزاء المتضررة:</p>
                <p dir="rtl" class="monster-desc-num">{{showDamage}}</p>
              </div>
              <p v-if="num<checkSteps" dir="rtl" class="monster-desc-label">فشل الهجوم</p>
            </div>
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=4}"></li>
          <li class="monster-item last-monster" :class="{active:num>=5}" @click="choose(5)">
            <img class="monster-ico" src="./images/baby5.png" v-if="checkSteps<5" alt="">
            <img class="monster-ico" src="./images/baby5-active.png" v-if="checkSteps>=5" alt="">
            <div class="monster-desc" v-if="num>=5">
              <p dir="rtl" class="monster-desc-label">نسبة الدماء:</p>
              <p class="monster-desc-num">20000</p>
              <div v-if="num===checkSteps">
                <p dir="rtl" class="monster-desc-label">الأجزاء المتضررة:</p>
                <p dir="rtl" class="monster-desc-num">{{showDamage}}</p>
              </div>
              <p v-if="num<checkSteps" dir="rtl" class="monster-desc-label">فشل الهجوم</p>
            </div>
          </li>
        </ul>
        <ul class="monster-list monster-list-under">
          <li class="monster-item">
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=1}"></li>
          <li class="monster-item">
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=2}"></li>
          <li class="monster-item">
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=3}"></li>
          <li class="monster-item">
          </li>
          <li class="monster-line" :class="{lineActive:checkSteps>=4}"></li>
          <li class="monster-item">
          </li>
        </ul>
      </div>
    </div>
   <!--我的奖励部分-->
    <div class="my-award-wrap">
      <div class="award-title" dir="rtl">جوائزى</div>
    <!--  <div class="personal-title-line">
        <div class="left-line"></div>
        <div class="title-text" dir="rtl">جوائزى</div>
        <div class="right-line"></div>
      </div>-->
      <table class="award-table" cellpadding="0" cellspacing="0">
        <tr>
          <td dir="rtl">اسم الجائزة</td>
          <td dir="rtl">مصدر الجائزة</td>
          <td dir="rtl"> الوقت</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الأول لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الثاني لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الأول لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الثاني لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الأول لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الثاني لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الأول لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الثاني لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الأول لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
        <tr>
          <td>头像边框+1000exp</td>
          <td>جائزة المضيف لإتمام المستوى الثاني لإصابة الوحش </td>
          <td>2018.09.23</td>
        </tr>
      </table>
      <p class="award-tips" dir="rtl">* ستصل الجائزة الى حسابك خلال 24 ساعة </p>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        personal:'',
        num:0,//当前被激活的选项编号
        current_num:0, //当前所攻击的编号
        rank:'',
        myDamage:0, //这个就是总的伤害值
        showDamage:0,//显示出来的伤害值，就是那个阶段的值
      }
    },
    methods:{
      close(){
        this.$emit('closePerson')
      },
      /*选择怪兽选项*/
      choose(index){
//        console.log(index);//1-5
        this.num=index;
      },
      getPersonal(){
        this.testMock('personal_center').then((res)=>{
          console.log(res.data,'个人中心');
          this.personal=res.data;
          this.num=res.data.my_task.current_hunt_num;
          this.current_num=res.data.my_task.current_hunt_num;
        }).catch((err)=>{
          console.log(err);
        })

      },

      /*获取冒号的地址*/
      _getNum(str){
        return str.indexOf(':')+1
      },
      /*获取当地时间*/
      _getRealTime(ts){
        let tt=new Date(ts).getTime()+10800000;
        let dateServe=new Date(tt);
        let UTCYear =dateServe.getUTCFullYear();  // 根据世界时从 Date 对象返回四位数的年份。
        let UTCMonth = dateServe.getUTCMonth()+1; // 根据世界时从 Date 对象返回月份 (0 ~ 11)。
        let UTCDate = dateServe.getUTCDate() // 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
        let time={"ts":`${UTCYear}-${UTCMonth}-${UTCDate}`}
        return time;
      },

  /*2，获取主播奖励*/
      getHostAward(){
        this.getSummary('get-host-reward',1003303).then((res)=>{
          console.log(res.data,'主播奖励');
//          console.log(typeof res.data);
          let arr=[];
          let obj={};
          var result=res.data;
          result.forEach((val)=>{
            let sp= val.split(',');
//            console.log(sp);

            let num1=this._getNum(sp[0])
            let level1=sp[0].slice(num1);

            let level={"level":level1}

            let exp={"exp":sp[1].slice(3)}

            let num2=this._getNum(sp[2]);
            let ara=sp[2].slice(num2)
            let avatar={"avatar":ara}

            let num3=this._getNum(sp[3]);
            let ts=sp[3].slice(num3)

            let time=this._getRealTime(ts);
            console.log(time,'++++++++++++++++++++++++++');
            //把时间变成当地时间
            /*let tt=new Date(ts).getTime()+10800000;
            let dateServe=new Date(tt);
            let UTCYear =dateServe.getUTCFullYear();  // 根据世界时从 Date 对象返回四位数的年份。
             let UTCMonth = dateServe.getUTCMonth()+1; // 根据世界时从 Date 对象返回月份 (0 ~ 11)。
            let UTCDate = dateServe.getUTCDate() // 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
            let time={"ts":`${UTCYear}-${UTCMonth}-${UTCDate}`}*/

            obj=Object.assign(obj,level,exp,avatar,time);
            console.log(obj);

            arr.push(obj);
          })
          //把字符串分开了
          console.log(arr);

        }).catch((err)=>{
          console.log(err);
        })
      },

      /*2,用户抽奖奖品*/
      getDrawRecord(){
        this.getSummary('get-draw-reward').then((res)=>{
//          console.log(res.data,'用户抽奖奖品');
          let result=res.data;
          let arr=[];
          result.forEach((val)=>{
            let sp= val.split(',');
//            console.log(sp);
            //遍历 出数组了，还需要更新时间
            let sp1=sp[0];
            let sp2=sp[1];
            let time=this._getRealTime(sp2);
            let obj={"award":sp1};
            obj=Object.assign(obj,time);
//            console.log(obj);
            arr.push(obj);
          })
          console.log(arr,'合成的数组');
          //数组需要过滤
         let newArr =arr.filter((val,index)=>{
            return val.award!=="Good luck next time";
          })
          console.log(newArr,'过滤的数组');


        }).catch((err)=>{
          console.log(err);
        })
      },
      checkStepNum(damage){
        if(damage<=0){
          return 0
        }else if(damage>0&&damage<=400){
//           this.num=1
          return 1

          }else if(damage>400&&damage<=800){

            return 2
            //2
          }else if(damage>800&&damage<=1200){

            return 3
            //3
          }else if(damage>1200&&damage<=1600){

            return 4
            //4
          }else if(damage>1600&&damage<2000){
            return 5
            //5
          }else if(damage>=2000){
          return 5
          }
        }
    },
    created(){
//      this.getPersonal();
      this.getHostAward();
      this.getDrawRecord();
    },
    computed:{
      checkSteps(){
        if(this.myDamage<=0){
          this.showDamage=this.myDamage;
          return 0
        }else if(this.myDamage>0&&this.myDamage<=400){
          this.showDamage=this.myDamage;
          return 1
          //1
        }else if(this.myDamage>400&&this.myDamage<=800){
          this.showDamage=this.myDamage-400;
          return 2
          //2
        }else if(this.myDamage>800&&this.myDamage<=1200){
          this.showDamage=this.myDamage-800;
          return 3
          //3
        }else if(this.myDamage>1200&&this.myDamage<=1600){
          this.showDamage=this.myDamage-1200;
          return 4
          //4
        }else if(this.myDamage>1600&&this.myDamage<2000){
          this.showDamage=this.myDamage-1600;
          return 5
          //5
        }else if(this.myDamage>=2000){
          this.showDamage=this.myDamage-2000
          return 6
        }
      }
    },
    mounted(){
      console.log(this.$route.params);
      this.rank=this.$route.params.rank;
//      this.myDamage=this.$route.params.myDamage;
//      this.num=this.$route.params.myDamage;
      this.num=this.checkStepNum(this.$route.params.myDamage);
      this.myDamage=this.$route.params.myDamage;

    }
  }

</script>
<style lang="scss">
  .personal-center{
    position: relative;
    background-color: #FEDD89;
    /*padding:0.5rem 0.2rem;*/
    padding-top: 0.5rem;
    margin-bottom:1rem;
    color: #000;
    .personal-title{
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

    .my-task-wrap{
      padding:0 0.14rem;

    }

    .personal-title-line{
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
      .title-text{
        font-size:0.12rem;
        font-weight:bold;
        color: #541928;
        margin:0 0.04rem;
      }



    }
    .my-task{
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      color: #A24B18;
      margin-top:0.2rem;
      .task-num{
        font-size:0.18rem;
        font-weight:bold;
      }
      .task-label{

      }


    }
  }

  .monster-tab{
    position: relative;
    margin-top:0.3rem;
    .monster-list{
      display: flex;
      position: relative;
      z-index: 5;
      align-items: center;
      .monster-item{
        position: relative;
        width: 0.5rem;
        height:0.47rem;
        .monster-desc{
          position: absolute;
          width: 1rem;
          font-size:0.10rem;
          /*height: 1rem;*/
          left: 50%;
          top: 140%;
          transform: translate(-50%,0);
          .monster-desc-num{
            color: #00835C;
            line-height:0.2rem;
            /*text-align: left;*/
          }
          .monster-desc-label{
            color: #617562;
            line-height:0.2rem;
            /*text-align: left;*/
          }



        }
      }
      .monster-item.active{
        .monster-ico{
          transform: scale(1.5,1.5);
        }
      }

      .first-monster{
        .monster-desc-num{
          text-align: right;
        }
        .monster-desc-label{

          text-align: right;
        }
      }
      .last-monster{
        .monster-desc-num{
          text-align: left;
        }
        .monster-desc-label{

          text-align: left;
        }
      }

      .monster-line{
        flex: 1;
        /*width:0.3rem;*/
        height: 0.02rem;
        background-color: #A2A2A2;
        &.lineActive{
          background-color: #E2922D;
        }
      }
    }
    .monster-list-under{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      .monster-item{
        width: 0.1rem;
        /*background-color: red;*/
      }

    }
  }

  /*我的奖励部分*/
  .my-award-wrap{
    background-color: #FACE5E;
    padding:0.2rem 0.14rem;
    margin-top:1rem;
    /*max-height: 1.5rem;*/
    /*overflow: scroll;*/
  }
  .award-title{
    font-size: 0.14rem;
    color: #B75F20;
    margin-bottom:0.12rem;
  }

  .award-table{
    width: 100%;
    margin: 0 auto 0.2rem;
    font-size:0.12rem;
    tr{
      td{
        background-color: #FEDD89;
        border: 1px solid #F4AE00;
        color: #AF5C14;
        padding:0.02rem 0.04rem;
        &:last-of-type{
          background-color: #D27F12;
          color: #541928;
        }
        &:not(:last-of-type){
          border-right:none;

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
  .award-tips{
    text-align: right;
    color: #4C1630;
    font-size:0.12rem;
  }

</style>
