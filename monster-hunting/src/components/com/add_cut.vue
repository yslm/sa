<!--增减购买次数的组件-->

<template>
  <div class="add-cut">
    <button @click="decrease">-</button>
    <input type="hidden" v-model="count" key="detailCount">
    <span>{{count}}span</span>
    <button @click="add">+</button>
    <span style="display: none">{{crease}}{</span>
  </div>
</template>
<script>
  export default {
    name:'lo-add',
    props:['detailCount'],
    data(){
      return{
        count:0
      }
    },
    methods:{
      add(){
        //增加
        this.count++;
      },
      decrease(){
        //减少
        if(this.count<=0){
          this.count=0;
          return
        }
        this.count--;
      }
    },
    computed:{
      crease(){
        this.$set(this.detailCount,'count',this.count)
//        this.listData.list
      }
    },
    mounted(){

      this.Event.$on('clear',()=>{
        console.log('接收到了信息');
        this.count=0;
      })
    }

  }
</script>
<style></style>
