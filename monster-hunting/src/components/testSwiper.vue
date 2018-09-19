<template>
  <div class="index">


    <div class="live-board">
      <div class="swiper-wrapper">
        <swiper :options="swiperOption" v-if="swiperSlides.length>0" dir="rtl" >
          <swiper-slide v-for="(slide,index) in swiperSlides">
            <div >
              <p class="slide-text"> {{ slide }}</p>
            </div>
          </swiper-slide>
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
      </div>

    </div>

  </div>
</template>
<script>
  let vm = null;
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import axios from 'axios'
  export default {
    data(){
      return{
        swiperOption: {
//          slidesPerView:5,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          disableOnInteraction : false,
          effect : 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
          },
          on:{
            touchStart: function(event){
              vm.go(event);
            },
          },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop : true
        },
        swiperSlides:[1,2,3],
        isShowPersonal:false,//是否显示个人中心弹窗
        isShowReward:false,//是否显示战利品弹窗



      }
    },
    methods:{





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
//        console.log('执行了');
//        console.log(event.target);
        var target=event.target;

        if(target.nodeName.toLowerCase() == 'img'){
//          console.log('头像');
//          console.log(target.getAttribute('sid'));

        }
      },


    },


    created(){
//      this.getSummary();
//      this.getBoard();
      vm = this;

    },

    components:{

      swiper,
      swiperSlide,

    },

    mounted(){

    }
  }

</script>
<style lang="scss" scoped>

  .content{
    height: 2000px;
    background-color: blue;
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


</style>
