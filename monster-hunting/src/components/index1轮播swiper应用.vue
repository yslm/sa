<template>
  <div class="index">
    <div class="header">
      <button @click="showRule">规则</button>
      <div>
        <button @click="showsheet(1)">小宝刀</button>
        <button @click="showsheet(2)">中宝刀</button>
        <button @click="showsheet(3)">大宝刀</button>
        <button @click="showsheet(4)">特殊宝刀</button>
      </div>

      <!--承受的伤害进度条-->
      <div class="progress">
        <p>进度条</p>
      </div>

      <button @click="receiveReward">点击领奖</button>
    </div>

    <div class="live-board">
      <div class="tab">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <div class="swiper-wrapper">
        <swiper :options="swiperOption" v-if="swiperSlides.length>0" dir="rtl" >
          <swiper-slide v-for="(slide,index) in swiperSlides">
            <div >
              <img class="avatar" :src="slide.avatar" :sid="slide.name" alt="">
              <p class="slide-text"> {{ slide.name }}</p>
            </div>
          </swiper-slide>
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
      </div>
      <div class="list-wrap">
        <p>当前分身的攻击值榜单</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>



    </div>

    <div class="host-board">
      <p>主播榜</p>
      <ul class="board-title">
        <li>排名</li>
        <li>正在攻打分身</li>
        <li>主力输出</li>
      </ul>

      <ul class="board-list" v-if="board.length>0">
        <li class="list-item" v-for="(item,index) in board">
          <div class="rank">{{item.rank}}</div>
          <div class="current-monster">
            <p>当前编号 {{item.current_hunt}}</p>
          </div>
          <div class="host">
            <img class="host-avatar" :src="item.host.avatar" alt="">
            <p>{{item.host.name}}</p>
            <p>{{item.host.attck}}</p>
            <div class="live-modal" v-if="liveArr.length>0&&liveArr[index].live_on">
              <p>{{liveArr[index].live_session_id}}</p>

            </div>
          </div>
          <div class="members">
            <div class="member-item" v-for="val in item.members">
              <img class="member-avatar" :src="val.avatar" alt="">
            </div>

          </div>
        </li>
      </ul>

    </div>

    <div class="footer" v-if="summary">
      <p class="my-rank">目前排名：{{summary.my_info.my_rank}}</p>
      <div class="my-avatar">
        <img :src="summary.my_info.avatar" alt="">
      </div>
      <button class="my-info" @click="myInfo">个人中心</button>
      <!--<router-link to="/personal">个人中心</router-link>-->

    </div>

    <!--往期历史弹窗-->
    <div class="modal"  v-if="showBefore" @touchmove.prevent>
      <!--<div class="modal" @touchmove="touch">-->
      <div class="beforeWrap">
        <button @click="closeBeforeWinner">关闭弹窗</button>
        <Gift :giftNum="giftNum"  :isDeBlock="summary.unlock"></Gift>
      </div>
    </div>

    <!--规则弹窗-->
    <div class="modal" v-show="isShowRule">
      <ruleEl  @closeR="closeRule"></ruleEl>
    </div>

    <!--个人中心弹窗-->
    <div class="modal" v-show="isShowPersonal" @touchmove.prevent>
      <!--<personalCenter @closePerson="clp"></personalCenter>-->
      <router-view @closePerson="clp"></router-view>
    </div>


  </div>
</template>
<script>
  let vm = null;
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import List from './list.vue'
  import  ruleEl from './rule.vue'
  import Gift from './giftDetail.vue'
  import personalCenter from './personalCenter.vue'
  import axios from 'axios'
  export default {
    data(){
      return{
        showBefore:false,//是否显示往期历史弹窗
        isShowRule:false,//是否显示规则弹窗
        giftNum:0,//礼物的编号
        isDeBlock:true,//是否解锁
        swiperOption: {
          slidesPerView:5,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          disableOnInteraction : false,
          on:{
            touchStart: function(event){
              vm.go(event);
            },
          },
//        autoplay: {
//          disableOnInteraction: false,
//        },
//        loop : true
        },
        swiperSlides:[],
        isShowPersonal:false,//是否显示个人中心弹窗
        isShowReward:false,//是否显示战利品弹窗

        summary:'',//基本信息
        board:[], //主播帮单
        liveArr:[] //直播状态

      }
    },
    methods:{

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
      },

      /*关闭个人中心弹窗*/
      clp(){
        this.isShowPersonal=false;
        this.$router.go(-1);
      },
      Mock(){
//      var url='https://easy-mock.com/mock/5aa110c50c55ac37d93bbc11/example/mock';
//        var url='http://192.168.50.73:3003/list';
//        axios.get(url).then((result)=>{

//          console.log(this.testMock);

        this.testMock('list').then((result)=>{
          console.log(result.data);
//        console.log(result.data.data.res);
          this.swiperSlides=result.data;

          if(this.swiperSlides.length>=6){
            console.log(this.swiperOption);
            this.$set(this.swiperOption,'autoplay',{ disableOnInteraction: false});
            this.$set(this.swiperOption,'loop',true);
          }
        }).catch((err)=>{
          console.log(err);
        })

      },
      go(event){
        console.log('执行了');
        console.log(event.target);
        var target=event.target;

        if(target.nodeName.toLowerCase() == 'img'){
          console.log('头像');
          console.log(target.getAttribute('sid'));

        }
      },

      //获取基本信息
      getSummary(){
        this.testMock('summary').then((res)=>{
          console.log(res,'summary');
          this.summary=res.data

        }).catch((err)=>{
          console.log(err);
        })

      },

      //获取榜单数据
      getBoard(){
        this.testMock('borad').then((res)=>{

          this.board=res.data;
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
          title:'恭喜你',
          confirm:'确定',
          content:`

          <p>5coins</p>
          <p>可以在个人中心查看</p>
          `
        }).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })

      }

    },


    created(){
      this.Mock();

      this.getSummary();
      this.getBoard();
      vm = this;

    },

    components:{
      List,
      ruleEl,
      Gift,
      swiper,
      swiperSlide,
      personalCenter
    },

    mounted(){

    }
  }

</script>
<style lang="scss" scoped>
  .index{
    /*scroll-behavior: smooth;*/
  }

  .header{
    height: 2rem;
    background-color: red;
  }

  .content{
    height: 2000px;
    background-color: blue;
  }

  /*主播榜*/
  .host-board{
    margin-bottom: 2rem;
    .board-title{
      display: flex;
      &>li{
        flex: 1;
      }



    }

    .board-list{
      .list-item{
        display: flex;
        .rank{
          width: 0.5rem;
          height: 1rem;
          border: 1px solid #000;
        }

        .current-monster{
          width: 0.8rem;
          height: 1rem;
          border: 1px solid #000;
          background-color: red;
        }

        .host{
          position: relative;
          width: 1.5rem;
          height: 1rem;
          .host-avatar{
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
          }
          font-size: 0.12rem;
          .live-modal{
            position: absolute;
            width: 100%;
            /*height: 1rem;*/
            height: 100%;
            left: 0;
            top: 0;
            background-color: red;
            opacity:0.5;

          }


        }

        .members{
          flex: 1;
          height:1rem;
          display: flex;
          align-items: center;
          .member-item{
            flex: 1;
            height:1rem;
            line-height: 1rem;
          }

        }


      }


    }

  }


  .footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .my-rank{
      width: 0.5rem;
      height: 0.5rem;
      background-color: red;
    }
    .my-avatar{
      width: 0.8rem;
      height: 0.8rem;
      background-color: blue;
      position: relative;
      &>img{
        position: absolute;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        left: 0;
        top: -0.2rem;
      }
    }
    .my-info{
      width: 0.5rem;
      height: 0.5rem;
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
    left: 0;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    overflow: auto;
    padding-top: 1.2rem;
  }


  .swiper-container{

    width: 2.8rem;

  }

  .swiper-slide{
    /*width: 100px;*/
    height: 1rem;
    background-color: yellow;
  }


  .swiper-wrapper{
    /*justify-content: center;*/
  }

  .avatar{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }

  .slide-text{
    width: 100%;
    overflow: hidden;
    font-size: 0.14rem;
  }

</style>
