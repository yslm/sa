<template>
  <div class="index">
    <div class="header">

      <div class="header-title">
        <img src="./images/title.png" alt="">
        <p dir="rtl" class="title-time"> ميعاد المسابقة : 18-9-2018 حتى 02-10-2018 </p>
      </div>
      <!--怪兽展示以及四个礼物展示-->
      <div class="monster-wrap">
        <div class="knife" @click="showsheet(1)">
          <img src="./images/knife.png" alt="">
          <img class="star2" src="./images/star2.png" alt="">
        </div>
        <div class="arrow"  @click="showsheet(2)">
          <img src="./images/arrow.png" alt="">
          <img class="star1" src="./images/star1.png" alt="">
        </div>
        <img src="./images/cannon.png" class="cannon" alt=""  @click="showsheet(3)">
        <img src="./images/bomb.png" class="bomb" alt=""  @click="showsheet(4)">

        <div class="monster1 monster" v-if="myProgress<20">
          <img src="./images/monster1.png" alt="">
        </div>
        <div class="monster2 monster" v-if="myProgress>=20&&myProgress<50">
          <img src="./images/monster2.png" alt="">
        </div>
        <div class="monster3 monster" v-if="myProgress>=50&&myProgress<100">
          <img src="./images/monster3.png" alt="">
        </div>
        <div class="monster4 monster" v-if="myProgress>=100">
          <img src="./images/monster4.png" alt="">
        </div>

      </div>


      <!--承受的伤害进度条-->
      <p dir="rtl" class="progress-title">إصابات الوحش</p>

      <div class="progress">
        <div class="progress-inner" :style="{width:myProgress+'%',transition:'all '+progressNum+'s ease'}"></div>
      </div>
      <div class="progress1">
        <div class="p20 progress-num" :class="{active:myProgress>=20}">
          <div class="line"></div>
          <p class="progress-text">1.5m</p>
        </div>
        <div class="p50 progress-num" :class="{active:myProgress>=50}">
          <div class="line"></div>
          <p class="progress-text">5m</p>
        </div>
        <div class="p100 progress-num" :class="{active:myProgress>=100}">
          <div class="line"></div>
          <p class="progress-text">10m</p>
        </div>
      </div>

      <!--领奖按钮-->
      <button v-if="summary&&summary.my_info.award_chance>0" class="go-reward" @click="receiveReward" dir="rtl">انقر للحصول على الجائزة
      </button>
    </div>

    <!--测试invader-->
    <div style="width: 300px;height: 300px; font-size: 28px;">
      <a href="https://play.google.com/store/apps/details?id=org.cocos2dx.newInvader&referrer=utm_source%3Dloops_invader_2018%26utm_medium%3Dbanner">安卓</a>
      <br>
      <a href="https://itunes.apple.com/app/apple-store/id828823376?pt=346993&ct=loops_invader_2018&mt=8">ios</a>

      <p @click="opStore">打开appstore</p>
      <br>
      <p @click="openBroser">打开系统自带浏览器</p>

    </div>


    <!--规则按钮-->
    <div class="rule-btn" @click="showRule"></div>

    <!--主播榜部分-->
    <div class="host-wrap">
      <div class="host-board">
        <div class="host-title">
          <img src="./images/host-title.png" alt="">
        </div>
        <ul class="board-title">
          <li class="title-rank" dir="rtl">الترتيب</li>
          <li class="title-baby" dir="rtl">الترتيب الحالي </li>
          <li class="title-member" dir="rtl">أكثر المحاربين إصابة للوحش</li>
        </ul>

        <ul class="board-list" v-if="board.length>0">
          <li class="list-item" v-for="(item,index) in board" v-if="index<limitNum">
            <div class="rank">{{item.rank}}</div>
            <div class="current-monster" :style="{backgroundImage:monsterBabyUrl[item.current_hunt_num-1]}">
              <img class="complete-ico" src="./images/complete-ico.png" alt="">
            </div>
            <div class="host-info">
              <div class="host">
                <img class="host-avatar" :src="item.host.avatar" alt="" :class="{topRank:index<=2}">
                <!--<div class="live-modal" v-if="liveArr.length>0&&liveArr[index].live_on">-->
                <div class="live-modal">
                  <!--<p>{{liveArr[index].live_session_id}}</p>-->
                  <img class="live-ico" src="./images/live.png" alt="">
                </div>
                <!--<div class="my-name">{{item.host.name}}</div>-->
              </div>
              <div class="members">
                <p class="host-name">{{item.host.name}}</p>
                <!--<p class="host-attck" dir="rtl">الترتيب</p>-->
                <!--<p class="host-attck" dir="rtl">{{item.host.attck}}</p>-->
                <div class="host-attck"><span>{{item.host.attck}}</span><span dir="rtl">الترتيب:</span></div>
                <div class="member-list">
                  <div class="member-item" v-for="(val,index) in item.members">
                    <img class="member-avatar" :src="val.avatar" alt="">
                    <span class="member-rank">{{index+1}}</span>
                  </div>
                </div>


              </div>
            </div>

          </li>
        </ul>

      </div>
    </div>
    <div class="more" @click="moreBtn" :class="{closeup:more}">
      <img src="./images/more.png" alt="">
    </div>

    <div class="footer" v-if="summary">
      <div class="my-rank">
        <p dir="rtl" class="rank-title">الترتيب الحالي</p>
        <p class="rank-num">{{summary.my_info.my_rank}}</p>
      </div>
      <div class="my-avatar">
        <img :src="summary.my_info.avatar" alt="">
        <p class="my-name" dir="rtl"> صفحتي الرئيسيةصفحتي</p>
      </div>
      <div class="my-info" >
        <button class="info-btn" @click="myInfo">صفحتي الرئيسية</button>
      </div>
      <!--<router-link to="/personal">个人中心</router-link>-->

    </div>

    <!--礼物详情弹窗-->
    <div class="modal"  v-if="showBefore" @touchmove.prevent>
      <!--<div class="modal" @touchmove="touch">-->
     <div class="giftWrap">
       <button @click="closeBeforeWinner" class="close-ico"></button>
       <Gift :giftNum="giftNum"  :isDeBlock="summary.unlock"></Gift>
     </div>
    </div>

    <!--规则弹窗-->
    <div class="modal" v-show="isShowRule">
        <ruleEl  @closeR="closeRule"></ruleEl>
    </div>
    <!--个人中心弹窗-->
    <div class="modal" v-show="isShowPersonal">
      <!--<personalCenter @closePerson="clp"></personalCenter>-->
      <router-view @closePerson="clp"></router-view>
    </div>


  </div>
</template>
<script>

  import List from './list.vue'
  import  ruleEl from './rule.vue'
  import Gift from './giftDetail.vue'
  import personalCenter from './personalCenter.vue'
  export default {
    data(){
      return{
        limitNum:5,//榜单默认显示5条
        more:false,//是否加载更多
        showBefore:false,//是否显示往期历史弹窗
        isShowRule:false,//是否显示规则弹窗
        giftNum:0,//礼物的编号
        isDeBlock:true,//是否解锁
        isShowPersonal:false,//是否显示个人中心弹窗
        isShowReward:false,//是否显示战利品弹窗
        myProgress:0,//进度条进度
        summary:'',//基本信息
        board:[], //主播帮单
        liveArr:[], //直播状态
        progressNum:0, //这个就是定义过渡的时间
        monsterBabyUrl: ["url(" + require("./images/monster-baby1.png") + ")","url(" + require("./images/monster-baby2.png") + ")","url(" + require("./images/monster-baby3.png") + ")","url(" + require("./images/monster-baby4.png") + ")","url(" + require("./images/monster-baby5.png") + ")"],
        num:1


      }
    },
    methods:{

      opStore(){

        this.openAppStore();
      },

      openBroser(){
        this.openSystemBrowser();
      },

      /*点击显示规则弹窗按*/
      showRule(){
        this.isShowRule = true;
        ModalHelper.afterOpen();
      },

      /*关闭规则按钮*/
      closeRule(){
        ModalHelper.beforeClose();
        this.isShowRule=false;
      },

      //显示不同的宝刀说明
      showsheet(flag){


        this.showBefore=true;
        switch (flag){
          case 1:
            this.giftNum=1;
            this.isDeBlock=true;
            break;
          case 2:
            this.giftNum=2;
            this.isDeBlock=true;
            break;
          case 3:
            this.giftNum=3;
            //需要判断解锁没有
            this.isDeBlock=false;
            break;
          case 4:
            this.giftNum=4;
            this.isDeBlock=true;
            break;
        }

      },

      closeBeforeWinner(){
        this.showBefore=false;
      },

      /*点击显示我的个人中心*/
      myInfo(){
        this.isShowPersonal=true;
        this.$router.push('personal')
        ModalHelper.afterOpen();
      },

      /*关闭个人中心弹窗*/
      clp(){
        ModalHelper.beforeClose();
        this.isShowPersonal=false;
        this.$router.go(-1);
      },
      //获取基本信息
      getSummary(){
        this.testMock('summary').then((res)=>{
          console.log(res.data,'summary');
          this.summary=res.data;
          this.myProgress=10;
          /*根据具体的数值设置过渡时间*/
          if(this.myProgress<=50){
            this.progressNum=1
          }else if(this.myProgress>50&&this.myProgress<=75){
            this.progressNum=1.5
          }else if(this.myProgress>75){
            this.progressNum=2
          }




        }).catch((err)=>{
          console.log(err);
        })

      },

      //获取榜单数据
     getBoard(){
        this.testMock('borad').then((res)=>{

          this.board=res.data.board;
//          this.board=res.data;
          //需要分离出id，然后去查询
          let idArr=[];
          console.log(this.board,'榜单数据');
          this.board.forEach((val,index)=>{
            idArr.push(val.host.uid);
          })
          console.log(idArr);
          //然后调用查询接口
          let data={
            'user_ids': idArr
          }
           this.bulk(data)

        }).catch((err)=>{
          console.log(err);
        })

      },

      //查询接口调用
      bulk(data){
        this.bulkQuery('bulk_query',data).then((res)=>{
          console.log(res.data,'查询接口');

         this.liveArr=res.data;



        }).catch((err)=>{
          console.log(err);})
      },

      /*点击领取奖励*/
      receiveReward(){
        console.log(111);
//        this.isShowReward=false;
        //弹出奖励提示框
        this.$msgbox({
            confirm:'تأكيد\n',
            content:'50',
        }).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })

      },

      /*点击更多按钮*/
      moreBtn(){
      this.limitNum=this.board.length;
      this.more=!this.more;
      if(!this.more){
        this.limitNum=5;
      }

      },
    },
    created(){
      this.getSummary();
      this.getBoard();
    },
    computed:{

    },

    components:{
      List,
      ruleEl,
      Gift,
      personalCenter
    },
    mounted(){
    }
  }

</script>
<style lang="scss" scoped>

  /*设置统一的超过宽度显示省略*/
  .ellipse{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .z-index20{
    z-index: 20;
  }
  .z-index10{
    z-index: 10;
  }

 .header{
   padding-top: 0.2rem;
   /*height: 5rem;*/
   .title-time{
     color: #C65E02;
     font-weight:bold;
     font-size: 0.12rem;
   }
   /*怪兽以及礼物*/
   .monster-wrap{
     position: relative;
     width: 100%;
     height: 2.8rem;
     .knife{
       position: absolute;
       width: 0.58rem;
       height: 0.64rem;
       left: 0;
       top: 0;
       @extend .z-index20;
       animation:scal 2.6s infinite alternate ease;
       .star2{
         position: absolute;
         width: 0.2rem;
         height: 0.14rem;
         top: 0.15rem;
         right: 0;
       }

     }
     .arrow{
       position: absolute;
       width: 0.63rem;
       height: 0.83rem;
       top: 0.4rem;
       right:0.15rem;
       @extend .z-index20;
       animation:scal 1.5s infinite alternate ease;
       .star1{
         position: absolute;
         width: 0.11rem;
         height: 0.1rem;
         top: 0.21rem;
         left: 0.2rem;
       }
     }
     .cannon{
       position: absolute;
       width: 0.79rem;
       height: 0.79rem;
       top: 1.75rem;
       left:0.23rem;
       @extend .z-index20;
       animation:scal 1.8s infinite alternate ease;
     }
     .bomb{
       position: absolute;
       width: 0.66rem;
       height: 0.66rem;
       top: 2.15rem;
       right: 0.16rem;
       @extend .z-index20;
       animation:scal 2s infinite alternate ease;
     }


     .monster{
       position: absolute;
       /*background-image: url("./images/monster1.png");*/
       /*background-repeat:no-repeat;*/
       /*-webkit-background-size: 100%;*/
       /*background-size: 100%;*/
       @extend .z-index10;
     }
     .monster1{
       width: 2.43rem;
       height: 2.65rem;
       top: 0.06rem;
       left:0.43rem;
       /*background-image: url("./images/monster1.png");*/
     }
     .monster2{
       width: 2.55rem;
       height: 2.67rem;
       top: 0.06rem;
       left:0.6rem;
       /*background-image: url("./images/monster2.png");*/
     }
     .monster3{
       width:1.84rem;
       height: 2.79rem;
       top: 0.06rem;
       left:1rem;
       /*background-image: url("./images/monster3.png");*/
     }
     .monster4{
       width:2.5rem;
       height: 2.77rem;
       top: 0.06rem;
       left:0.6rem;
       /*background-image: url("./images/monster4.png");*/
     }
   }
 }
 @keyframes scal {
   0%{
     transform: scale(1.2);
   }
   100%{
     transform: scale(0.8);
   }

 }


 /*进度条*/

.progress-title{
  text-align: center;
  color: #029C70;
  font-size: 0.13rem;
  font-weight:bold;
}
.progress{
  position: relative;
  width: 3.2rem;
  height: 0.14rem;
  background-color: #3E1129;
  /*border: 1px solid #302923;*/
  margin:0 auto;
  margin-bottom: 0.02rem;

  .progress-inner{
    height: 0.14rem;
    background-image: linear-gradient(to right,#04be92 0,#04be92 0.64rem,#01956b 0.64rem,#01956b 1.6rem,#00794f 1.6rem,#00794f 3.2rem);
  }


}
.progress1{
  position: relative;
  width: 3.2rem;
  margin:0 auto;
  margin-bottom: 0.6rem;
  /*overflow: hidden;*/
  /*下面的数字*/
  .progress-num{
    position: absolute;
    /*width: 0.4rem;*/
    float: left;
    font-size:12px;
    color: #A54B1D;
    .line{
      width: 0.02rem;
      height: 0.08rem;
      background-color: #A54B1D;
    }
    .progress-text{
      width: 0.4rem;
      margin-left:-0.2rem;
      /*height: 0.4rem;*/
      /*background-color: indigo;*/
      text-align: center;

    }


  }

  .progress-num.active{
    color: #04BE92;
    .line{
      width: 0.02rem;
      height: 0.08rem;
      background-color: #04BE92;
    }
  }
  .p20{
    top: 0;
    left: 0.63rem;
  }
  .p50{
    top: 0;
    left:1.59rem;
  }
  .p100{
    top: 0;
    left:3.18rem;
  }
}

/*去抽奖按钮*/
.go-reward{
  width: 2rem;
  height: 0.4rem;
  border-radius: 0.05rem;
  margin-bottom: 0.3rem;
  background-image: linear-gradient(to bottom,#00dea2,#00ba6a);
  color: #44142E;
  font-size: 0.16rem;
  font-weight:bold;
  font-family:Cairo;
}

  .msg-content{
    color: #00835C;
    font-size: 0.36rem;
    font-weight:bold;
  }
  .msg-coins-text{
    color: #A24B18;
    font-size: 0.14rem;
  }

/*规则按钮*/
  .rule-btn{
    position: fixed;
    width: 0.4rem;
    height: 0.54rem;
    left:0;
    top: 4.5rem;
    z-index: 50;
    background: url("./images/rule-book.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    /*animation: move 3s ease-out infinite reverse ;*/
  }
  @keyframes move {
    0%{
      transform: translate3d(0,0,0);
    }
    50%{
      transform: translate3d(0,-40px,0);
    }
    100%{
      transform: translate3d(0,0,0);
    }

  }

 /*主播榜*/

  .host-wrap{
    padding:0 0.1rem;
  }

  .host-board{
    position: relative;
    border: 0.04rem solid #72301f;
    padding-top: 0.2rem;
    /*固定的图片标题*/
    .host-title{

      position: absolute;
      width: 1.98rem;
      height:0.22rem;
      top: -0.11rem;
      left: 50%;
      margin-left:-0.99rem;
      background-color: #4C1630;
    }
    .board-title{
      width: 100%;
      display: flex;
      font-size:0.12rem;
      font-weight:bold;
      &>li{
        height: 0.3rem;
        line-height:0.3rem;
        background-color: #44142e;
        color: #9a6c4a;
      }
      .title-rank{
        width: 0.6rem;
        border-right:0.02rem solid #4C1630;

      }
      .title-baby{
        width: 1rem;
        border-right:0.02rem solid #4C1630;

      }
      .title-member{
        flex:1;

      }



    }

    .board-list{
      .list-item{
        display: flex;
        align-items: center;
        height: 1.12rem;
        /*padding:0 0.2rem;*/

        &:nth-of-type(even){
          background-color: #44142e;
        }
        .rank{
          width: 0.6rem;
          font-size: 0.4rem;
          color: #04be92;
          font-weight:bold;
        }

        .current-monster{
          position: relative;
          width: 0.69rem;
          height: 0.72rem;
          margin-left:0.1rem;
          margin-right:0.2rem;
          /*background-color: red;*/
          -webkit-background-size: 100%;
          background-size: 100%;
          background-repeat:no-repeat;
          .complete-ico{
            position: absolute;
            width: 0.22rem;
            height: 0.22rem;
            right: 0.1rem;
            bottom: 0.1rem;
          }
        }

        .host-info{
          flex: 1;
          display: flex;
          align-items: center;
          font-size:0.12rem;
          /*margin-left:0.1rem;*/
          .host{
            box-sizing: content-box;
            position: relative;
            width: 0.6rem;
            height: 0.6rem;
            .host-avatar{
              width: 0.6rem;
              height: 0.6rem;
              border-radius: 50%;
              border:0.02rem solid #8d410f;
              &.topRank{
                border:0.02rem solid #00a47d;

              }
            }
            .live-modal{
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              /*background-color: red;*/
              /*opacity:0.5;*/
              .live-ico{
                position: absolute;
                width: 0.3rem;
                left: 50%;
                margin-left:-0.15rem;
                bottom: 0;
              }
            }
            .my-name{
              position: absolute;
              width: 100%;
              line-height:0.2rem;
              left: 0;
              bottom: -0.2rem;
              color: #f4861a;
              @extend .ellipse;
            }

          }
          .members{
            flex: 1;
            height:0.7rem;
            margin-left:0.06rem;
            .host-name{
              width: 1rem;
              text-align: left;
              line-height:0.16rem;
              color: #f4861a;
              @extend .ellipse;
            }
            .host-attck{
              text-align: left;
              color: #aa500d;
              line-height:0.16rem;
              margin-bottom:0.05rem;
              &>span{
                display: inline-block;
                /*line-height:0.12rem;*/
              }
            }

            .member-list{
              display: flex;
              .member-item{
                position: relative;
                width: 0.3rem;
                height: 0.3rem;
                /*background-color: blue;*/
                &:nth-of-type(n+2){
                  margin-left:0.1rem;
                }
                &:after{
                  position: absolute;
                  content: '';
                  width: 0.1rem;
                  height: 0.02rem;
                  background-color: #72301f;
                  top: 50%;
                  margin-top: -0.01rem;
                  left:-0.1rem;
                  z-index: 0;
                }
                .member-avatar{
                  width: 0.3rem;
                  height: 0.3rem;
                  border-radius: 50%;
                  border: 0.02rem solid #72301f;
                }
                .member-rank{
                  position: absolute;
                  width: 0.16rem;
                  height: 0.16rem;
                  padding-top:0.02rem;
                  /*padding-right:0.01rem;*/
                  border-radius: 50%;
                  background-color: #3d1002;
                  right: -0.05rem;
                  bottom: 0;
                  color: #aa500d;
                  font-size:0.12rem;
                  line-height: 0.12rem;
                  text-align: center;

                  font-style: italic;
                  font-weight:bold;
                }
              }
            }
          }
        }



      }


    }

  }

  .more{
    width: 0.41rem;
    height:0.21rem;
    margin:0.1rem auto 2rem;
    transition: transform .3s linear;
    /*margin-bottom: 2rem;*/
    &>img{
      width: 0.41rem;
    }

    &.closeup{
      transform:rotateZ(180deg);
    }
  }


 .footer{
   width: 100%;
   height: 0.6rem;
   position: fixed;
   bottom: 0;
   left: 0;
   padding:0 0.1rem;
   display: flex;
   align-items: center;
   background-image: linear-gradient(to right,#FCAB2A,#F2531C);
   font-size: 0.12rem;
   border-top:1px solid #FBA228;

   .my-rank{
     flex: 1;
     height: 0.6rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     .rank-title{
       color: #532415;
       font-weight:bold;
     }
     .rank-num{
       font-size: 0.22rem;
       line-height:0.22rem;
       color: #482512;
       font-weight:bold;
     }
   }
   .my-avatar{
     /*position: absolute;*/
     width: 1rem;
     height: 0.6rem;
     &>img{
       position: absolute;
       width: 0.64rem;
       height: 0.64rem;
       border: 0.02rem solid #913c0c;
       border-radius: 50%;
       left: 50%;
       margin-left:-0.32rem;
       top: -0.25rem;
     }
     .my-name{
       margin-top:0.38rem;
       color: #742F0B;
       font-weight:bold;
       font-size: 0.13rem;
       @extend .ellipse;
     }
   }
   .my-info{
     flex: 1;
     .info-btn{
       float: right;
       width: 1.25rem;
       height: 0.25rem;
       background-color: #c85400;
       border-radius: 0.05rem;
       font-weight:bold;
       color: #FFE073;
       @extend .ellipse;
     }

   }



 }

/*蒙版*/
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(10, 43, 58, 0.5);
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.18rem;
  padding-right: 0.18rem;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: 1.2rem;

}


/*礼物弹窗*/
.giftWrap{
  width: 3.1rem;
  /*height:2rem;*/
  position: relative;
  margin:0 auto;
  padding-top: 0.26rem;
  background-color: #FEDD89;
}

.avatar{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}



</style>
