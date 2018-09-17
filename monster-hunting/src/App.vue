<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
  //  import {Loadmore} from 'mint-ui';
  //  import startEl from './components/index2.vue'
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    components:{
//    startEl,
//    'v-loadmore':Loadmore
    },

    methods: {
      /*根据拼接的参数判断点击来源*/
      getSource(){

        var clickSource = this.getUrlParams('source');

        switch (clickSource){
          case 'live':
            this._di({
              page: "familyCompete3-round3",
              title: "familyCompete3-round3",
              source:'familyCompete3-round3-live'
            },14226);
            break;
          case 'banner':
            this._di({
              page: "familyCompete3-round3",
              title: "familyCompete3-round3",
              source:'familyCompete3-round3-banner'
            },14226);
            break;
          case 'notification':
            this._di({
              page: "familyCompete3-round3",
              title: "familyCompete3-round3",
              source:'familyCompete3-round3-notification'
            },14226);
            break;
          case 'popup':
            this._di({
              page: "familyCompete3-round3",
              title: "familyCompete3-round3",
              source:'familyCompete3-round3-popup'
            },14226);
            break;
          default:
            this._di({
              page: "familyCompete3-round3",
              title: "familyCompete3-round3",
              source:'familyCompete3-round3-banner'
            },14226);
        }

      }

    },
    mounted(){

      this.getSource();
    },
    watch:{

    }

  }

</script>

<style lang="scss">

  #app {
    text-align: center;
    /*background:url("../static/bg.jpg") 0 0 #4C1630 no-repeat;*/
    background:url("../static/bg.jpg") 0 0 #4c1630 no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

    /*公共蒙版*/
   /* .modal {
      width: 100%;
      height: 100%;
      background-color: rgba(10, 43, 58, 0.5);
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      overflow: auto;
      color: #DCDCDC;
    }*/

    .close-ico{
      position: absolute;
      display: inline-block;
      width: 0.16rem;
      height: 0.16rem;
      top: 0.1rem;
      right:0.1rem;
      background: url("./components/images/close-ico.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }



</style>
