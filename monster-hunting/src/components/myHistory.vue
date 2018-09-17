<template>
  <div class="history">
    <div>
      <p>竞拍成功</p>
      <button @click="setMyID">设置id</button>

    </div>
    <div>
      <p>竞拍失败</p>
    </div>

    <div>
      <p>距离结束还有xx</p>
      <lo-count :endTime="endTime" :callback="callback1" key="11"></lo-count>
      <lo-add :detailCount="boardList[0].detail[0]"></lo-add>
      <button>我要竞拍</button>

    </div>

  </div>
</template>
<script>
  export default {
    name:'history',
    data(){
      return{
        endTime:'8/5/2018 17:30:00',
        boardList:[{
          name:'30天',
          list:[31,32,33],
          detail:[
            {name:31},
            {name:32},
            {name:32}
          ]
        },{
          name:'60天',
          list:[61,62,63],
          detail:[
            {name:61},
            {name:62},
            {name:63}
          ]
        },{
          name:'90天',
          list:[91,92,93],
          detail:[
            {name:91},
            {name:92},
            {name:92}
          ]
        }]
      }
    },
    methods:{
      //历史记录需要在这个组件里面去请求数据

      callback1(){
        console.log(666);
      },
      setMyID(){
        //点击按钮设置自己的id
        this.$msgbox({
          title:'标题',
          cancel:'取消按钮',
          content:'',
          confirm:'确定按钮',
          input:true
        }).then(()=>{
          console.log('确定设置');
          setTimeout(()=>{
            this.$msgbox({
              title:'标题',
              cancel:'取消按钮',
              content:'你输入的账号不合适，请重新输入',
              confirm:'确定按钮',
            }).then(()=>{
              this.$msgbox({
                title:'标题',
                cancel:'取消按钮',
                content:'',
                confirm:'确定按钮',
                input:true
              }).then(()=>{

                setTimeout(()=>{
                  this.$msgbox({
                    title:'标题',
                    cancel:'取消按钮',
                    content:'你确定要设置这个id吗',
                    confirm:'确定按钮'
                  }).then(()=>{
                    this.$msgbox({
                      title:'标题',
                      cancel:'取消按钮',
                      content:'恭喜设置成功',
                      confirm:'确定按钮'
                    }).then(()=>{

                    }).catch(()=>{
                      //这个不能省略，否则捕获不到去掉按钮的点击
                    })


                  }).catch(()=>{

                  })


                },200)

              }).catch(()=>{


              })



            }).catch(()=>{
              console.log('guanbi');
            })

          },1000)


        }).catch(()=>{
          console.log('取消设置');
        })
      }


    },
    mounted(){
//      console.log(this.$route.params);
    }
  }

</script>
<style></style>
