<template>
  <div class="index">
    <div class="header">

      <div class="header-title">
        <img src="./images/title.png" alt="">
        <p dir="rtl" class="title-time"> ميعاد المسابقة : 20-9-2018 حتى 07-10-2018 </p>
      </div>
      <!--怪兽展示以及四个礼物展示-->
      <div class="monster-wrap">
        <div class="knife" @click="showsheet(1,lockStatus)">
          <img src="./images/knife.png" alt="">
          <img class="star2" src="./images/star2.png" alt="">
        </div>
        <div class="arrow"  @click="showsheet(2,lockStatus)">
          <img src="./images/arrow.png" alt="">
          <img class="star1" src="./images/star1.png" alt="">
        </div>
        <img src="./images/cannon.png" class="cannon" alt=""  @click="showsheet(3,lockStatus)">
        <img src="./images/bomb.png" class="bomb" alt=""  @click="showsheet(4,lockStatus)">

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
      <button  class="go-reward" @click="receiveReward(1)" dir="rtl">انقر للحصول على الجائزة
      </button>
    </div>

    <!--测试invader-->
  <!--  <div style="width: 300px;height: 300px; font-size: 28px;">
      <a href="https://play.google.com/store/apps/details?id=org.cocos2dx.newInvader&referrer=utm_source%3Dloops_invader_2018%26utm_medium%3Dbanner">安卓</a>
      <br>
      <a href="https://itunes.apple.com/app/apple-store/id828823376?pt=346993&ct=loops_invader_2018&mt=8">ios</a>

      <p @click="opStore">打开appstore</p>
      <br>
      <p @click="openBroser">打开系统自带浏览器</p>

    </div>-->

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
            <div class="rank">{{index+1}}</div>
            <div class="current-monster" :style="{backgroundImage:monsterBabyUrl[beatSteps[index]]}">
            <!--<div class="current-monster" v-if="beatSteps.length>0" :style="{backgroundImage:monsterBabyUrl[5]}">-->
              <img class="complete-ico" src="./images/complete-ico.png" alt="" v-if="beatSteps[index]>=5">
            </div>
            <div class="host-info">
              <div class="host">
                <img class="host-avatar" :src="item.avatar|clipPic(item.avatar,80)" @click="openProfile(item.user_id)" alt="" :class="{topRank:index<=2}">
                <div class="live-modal" v-if="item.live_on" @click="goLiveVideo(item.user_id,item.live_session_id)">
                <!--<div class="live-modal">-->
                  <!--<p>{{liveArr[index].live_session_id}}</p>-->
                  <img class="live-ico" src="./images/live.png" alt="">
                </div>
                <!--<div class="my-name">{{item.host.name}}</div>-->
              </div>
              <div class="members">
                <p class="host-name">{{item.name}}</p>
                <!--<p class="host-attck" dir="rtl">الترتيب</p>-->
                <!--<p class="host-attck" dir="rtl">{{hostRankList[index].damages}}</p>-->
                <div class="host-attck"><span>{{hostRankList[index].damages}}</span><span dir="rtl">الترتيب:</span></div>
                <div class="member-list" v-if="userList.length>0">
                  <div class="member-item" v-for="(val,inx) in userList[index]">
                    <img class="member-avatar" :src="val.avatar|clipPic(val.avatar,60)" alt="">
                    <span class="member-rank">{{inx+1}}</span>
                  </div>
                </div>

              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
    <button class="more" :disabled="board.length<5" @click="moreBtn" :class="{closeup:more}">
      <img src="./images/more.png" alt="">
    </button>

    <div class="footer" v-if="summary">
      <div class="my-rank">
        <p dir="rtl" class="rank-title">الترتيب الحالي</p>
        <p class="rank-num">{{checkMyRank}}</p>
      </div>
      <div class="my-avatar">
        <img :src="summary[0].avatar|clipPic(summary[0].avatar,80)" alt="">
        <p class="my-name" dir="rtl">{{summary[0].name}}</p>
      </div>
      <div class="my-info" >
        <button class="info-btn" @click="myInfo">صفحتي الرئيسية</button>
      </div>
      <!--<router-link to="/personal">个人中心</router-link>-->
    </div>

    <!--礼物详情弹窗-->

    <div class="modal"  v-show="showBefore" @touchmove.prevent>
      <!--<div class="modal" @touchmove="touch">-->
      <transition name="bounce">
     <div class="giftWrap" v-if="showBefore" >
       <button @click="closeBeforeWinner" class="close-ico"></button>
       <Gift :giftNum="giftNum"   :isDeBlock="lockStatus"></Gift>
     </div>
      </transition>
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
        showBefore:false,//是否显示礼物弹窗
        isShowRule:false,//是否显示规则弹窗
        giftNum:0,//礼物的编号
        isDeBlock:true,//是否解锁
        isShowPersonal:false,//是否显示个人中心弹窗

        myProgress:0,//进度条进度
        totalDamage:'',//总的伤害值
        summary:'',//基本信息
        board:[], //主播帮单，就是bulkquery查出来的内容
        hostRankList:[],//主播id以及伤害值榜
        userList:[], //这个就是前三名用户总榜

        lockStatus:0,//默认我0，1是解锁炸弹，2是解锁大炮
        myRank:0,//我的排名
        beatSteps:[],//攻打怪兽的分身的阶段
        myDamage:0,//我的伤害值，默认是0

        totalList:[],//这个就是查询到了每个家族里面前三名的总数组，这里面还需要分离出来id去查询头像


        progressNum:0, //这个就是定义过渡的时间
        monsterBabyUrl: ["url(" + require("./images/monster-baby1.png") + ")",
          "url(" + require("./images/monster-baby2.png") + ")",
          "url(" + require("./images/monster-baby3.png") + ")",
          "url(" + require("./images/monster-baby4.png") + ")",
          "url(" + require("./images/monster-baby5.png") + ")",
          "url(" + require("./images/monster-baby5.png") + ")"
        ],
        num:1

      }
    },
    methods:{

      //跳转个人直播间
      goLiveVideo(cid,sid){
        this.openVideo(cid,sid);
      },

      /*跳转个人主页*/
      openProfile(uid) {
        this.openChannelprofile(uid);
        //埋点
        this._di({
          page: "monster-hunter",
          title: "monster-hunter",
          button_name: "monster-hunter-goProfileBtn",//跳转个人主页按钮
//          host_id: uid //被点击人的id
        })
      },

      /*点击显示规则弹窗按*/
      showRule(){
        this.isShowRule = true;
        ModalHelper.afterOpen();
        this._di({
          page: "monster-hunter",
          title: "monster-hunter",
          button_name: "monster-hunter-ruleBtn",//规则按钮埋点
//          host_id: this.userId //用户id
        })
      },
      /*关闭规则按钮*/
      closeRule(){
        ModalHelper.beforeClose();
        this.isShowRule=false;
      },

      //显示不同的宝刀说明
      showsheet(flag,lockStatus=0){
        this.showBefore=true;
        switch (flag){
          case 1:
            this.giftNum=1;
            this.lockStatus=0;
            break;
          case 2:
            this.giftNum=2;
            this.lockStatus=0;
            break;
          case 3:
            this.giftNum=3;
            //需要判断解锁没有
            this.lockStatus=lockStatus;
            break;
          case 4:
            this.giftNum=4;
            this.lockStatus=lockStatus;
            break;
        }

      },

      closeBeforeWinner(){
        this.showBefore=false;
      },

      /*点击显示我的个人中心*/
      myInfo(){
        this.isShowPersonal=true;
//        this.$router.push('personal')
        this.$router.push({name:'personal',params: { rank:this.checkMyRank,myDamage:this.myDamage}})
        ModalHelper.afterOpen();
        //埋点
        this._di({
          page: "monster-hunter",
          title: "monster-hunter",
          button_name: "monster-hunter-personalBtn",//个人中心按钮埋点
//          host_id: this.userId //用户id
        })

      },

      /*关闭个人中心弹窗*/
      clp(){
        ModalHelper.beforeClose();
        this.isShowPersonal=false;
        this.$router.go(-1);
      },
      //获取基本信息
    /*  getSummary(){
        this.testMock('summary').then((res)=>{
          console.log(res.data,'summary');
          this.summary=res.data;
          this.myProgress=10;
          /!*根据具体的数值设置过渡时间*!/
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

      },*/
    async getMyInfo(){
      try{
        //拿到自己的id，并且查询，得到名字和头像
        let myId=this.getUrlParams('userId');
        console.log(myId,'wo de id');
        //然后根据这个
        let data={
          'user_ids': myId
        };
        let myInfo=await this.bulkD({'user_ids':[myId]});
//        let myInfo=await this.bulkD(data);

        console.log(myInfo.data,'我的个人信息');
        this.summary=myInfo.data;
        //除了头像和名字，还有伤害值,伤害值可以到下面的方法中去查询，如果没有就是0
      }catch(err){
        console.log(err);
      }
    },

      //获取榜单数据
  /*   getBoard(){
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

      },*/

      //查询接口调用，这个方法专门针对组员的查询
      bulk(data){
        this.bulkQuery('bulk_query',data).then((res)=>{
          console.log(res.data,'查询接口------------------');
          let allMember=res.data;
          //拿到了查询的数据，还需要包装一下，成为之前查询到的格式
          console.log(this.totalList,'原数组---------------');
          let userList=[];//前三名用户表

          this.totalList.forEach((val)=>{
            let length=val.length;
            //然后按照长度切割
            userList.push (allMember.splice(0,length))
          })

          this.userList=userList;
          console.log(userList,'***********************************');


          this.liveArr=res.data;
        }).catch((err)=>{
          console.log(err);})
      },

      /*批量查询主播状态*/
      async bulkD(data){
           return this.bulkQuery('bulk_query',data);
        },

      /*查询主播列表*/
      async getList(){
        return this.getSummary('get-host-ranking');
      },

      /*3，查询前三名用户*/
      async getUserRank(id){
        return  this.getSummary('get-user-ranking',id);
      },


      /*点击领取奖励*/
      async receiveReward(groupid){
        console.log(111);
//        需要先查询抽奖结果
        let rewardRes =await  this.goDraw(groupid);
        console.log(rewardRes.data,'抽奖结果');

        //弹出奖励提示框
        this.$msgbox({
            confirm:'تأكيد\n',
            content:rewardRes.data,
        }).then(()=>{
          console.log('确认');
        }).catch(()=>{
          console.log('取消');
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
      //接口部分

      /*1，获取主播列表*/
     async getHostRank(){
       try{
         //1,获取到主播id和伤害值
         let host=await this.getList();
         var hostRankList=host.data;
         this.hostRankList=hostRankList;
         console.log(hostRankList,'主播的id列表啊');
         //2,分离出id和伤害值列表
         let IdList=[];
         let damageList=[];
         hostRankList.forEach((val,index)=>{
           IdList.push(val.playerId);
           damageList.push(val.damages);
         });

         console.log(damageList,'伤害榜');
         //根据伤害值计算出当前所处的阶段
         let newDamage=damageList.map((val,index)=>{
           if(val<=400){
             return 0
             //1
           }else if(val>400&&val<=800){
             return 1
             //2
           }else if(val>800&&val<=1200){
             return 2
             //3
           }else if(val>1200&&val<=1600){
             return 3
             //4
           }else if(val>1600&&val<2000){
             return 4
             //5
           }else if(val>=2000){
            return 5
           }
         })
         console.log(newDamage,'新的数组');
         this.beatSteps=newDamage;//给伤害榜赋值

         //已经分离出主播id了，看自己的id在不在里面
         //这里主要就是获取排名和伤害值，为个人中心准备数据
         let myId=Number(this.getUrlParams('userId'));//是字符串，所以需要Number()转换一下
         console.log(IdList,myId,'用户分离出的id');
         let myRank=IdList.indexOf(myId);
         if(myRank>=0){
           //表示在列表里面，那么需要知道它的伤害值
           this.myDamage=damageList[myRank];//传递过去的就是阶段值
         }

         this.myRank=myRank;//这就是我的排名了

         console.log(myRank,'我在不在里面啊');

         //3,通过bulkquery查询主播的头像，姓名以及直播状态
         let data={
           'user_ids': IdList
         }
         let bulkList=await this.bulkD(data);
         console.log(bulkList.data,'查询的结果啊');
         this.board=bulkList.data;
         //4，查询每个主播的前三名用户，这里需要循环查询

         let totalList=[];//定义好总的空数组
         //关键是这个异步的结果我怎么拿到
         var self=this;

         (async function loop(index) {
           let users=await self.getUserRank(IdList[index]);
           if (++index<IdList.length) {
             loop(index);
             totalList.push(users.data)
           } else {
             console.log("全部执行完毕");
             console.log(totalList,'总的用户');
             self.totalList=totalList;//将原数组记录下来
             //还需要查询一次
             //需要将数组打开，然后分离出id，然后查询，然后在重组
             let newTotal=[];  //这个是展开之后的数组
             totalList.forEach((val)=>{
               console.log(typeof val);
               val.forEach((v)=>{
                 newTotal.push(v.playerId);
               })
             })
             console.log(newTotal,'抹平之后的结果');
             //然后调用bulk接口再去查头像
             let data={
               'user_ids': newTotal
             }
             self.bulk(data);
           }

         })(0);

           /*IdList.forEach(async (val,index)=>{
             let users=await this.getUserRank(val);
           })*/



       }catch(err){
         console.log(err);
       }
      },
      /*3,观众伤害排名*/
     /* getUserRank(){
        this.getSummary('get-user-ranking',1003303).then((res)=>{
          console.log(res.data,'观众列表');
        }).catch((err)=>{
          console.log(err);
        })
      },*/

      /*4,查询当前总伤害*/
      getAllDamage(){
        this.getSummary('get-all-damage').then((res)=>{
          console.log(res.data,'总伤害值');
          this.totalDamage=res.data;
          //根据伤害值计算进度以及解锁与否


          let range=this.totalDamage>=10000000?100:parseInt(this.totalDamage/10000000*100);
          console.log(range,'百分比');
          //通过百分比来计算具体进入，需要去整数

          this.myProgress=range;
          /*根据具体的数值设置过渡时间*/
          if(this.myProgress<=50){
            this.progressNum=1
          }else if(this.myProgress>50&&this.myProgress<=75){
            //炸弹解锁
            this.lockStatus=1;
            this.progressNum=1.5;
          }else if(this.myProgress>75){
            //大炮解锁
            this.lockStatus=2;
            this.progressNum=2;
          }


        }).catch((err)=>{
          console.log(err);
        })
      },

      /*5,用户抽奖奖品*/
      getDrawRecord(){
        this.getSummary('get-draw-reward').then((res)=>{
          console.log(res.data,'用户抽奖奖品');
        }).catch((err)=>{
          console.log(err);
        })
      },

      /*6,抽奖接口*/

      async goDraw(groupid){
        return this.draw('draw',groupid)
       /* this.draw('draw',1).then((res)=>{
          console.log(res.data,'抽奖结果');
        }).catch(err=>{
          console.log(err);
        })*/
      }


    },
    computed:{
      checkMyRank(){
        if(this.myRank<0){
          return 'out of 50'
        }else {
          return this.myRank+1
        }
      },
      /*检查攻打的哪个阶段*/
    },

    /*过滤器*/
    filters:{
      checkBeatNum(damage){
        if(damage<=400){
          return 1
          //1
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

          //结束
        }

      }
    },

    created(){
//      this.getSummary();
//      this.getBoard();
      this.getHostRank();
//      this.getHostAward();
//      this.getUserRank();
      this.getAllDamage();
//      this.getDrawRecord();
//      this.goDraw();
      this.getMyInfo();

    },
    components:{
      List,
      ruleEl,
      Gift,
      personalCenter
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
            border-radius: 50%;
            background-color: #8d410f;
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
    margin:0.1rem auto 1rem;
    transition: transform .3s linear;
    background-color: transparent;
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
     /*border-radius: 50%;*/
     /*background-color: #913c0c;*/
     &>img{
       position: absolute;
       width: 0.64rem;
       height: 0.64rem;
       border: 0.02rem solid #913c0c;
       border-radius: 50%;
       left: 50%;
       margin-left:-0.32rem;
       top: -0.25rem;
       background-color: #913c0c;
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
