<template>
  <div class="list" v-if="listData">
      <p>{{listData.name}}</p>
      <div v-for="(val,index) in listData.list" >
        <p>{{val}}</p>
        <button @click="bet">我要竞拍</button>
        <lo-add :detailCount="listData.list" :key="index"></lo-add>
      </div>
  </div>

</template>
<script>
  export default {
    props:['listData'],
    data(){
      return{
        list:{name:'asda',age:178}

      }
    },
    methods:{
      /*点击弹出弹窗*/
      bet(){
        this.$msgbox({
          title:'标题',
          cancel:'取消按钮',
          content:'这里是消息弹出内容',
          confirm:'确定按钮',
          className:'pop-custom'
        }).then(()=>{
          console.log("我点击了确定按钮")
        }).catch(()=>{
          console.log("我点击了取消按钮")
          }

        )
      }
    }
  }
</script>
<style></style>
