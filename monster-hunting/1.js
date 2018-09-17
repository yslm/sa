
// ### 3.榜单

borad=[
  {
    rank:1,        //排名
    current_hunt:2,//当前攻打得分身
    //主播信息
    host:{
      name:'abc', //主播名称
      avatar:'xxxx',//头像
      uid:56642,//id
      attck:2000,//攻击值

    },
    //主力输出名单
    members:[
      {
        avatar:'xxx',
        uid:123
      },
      {
        avatar:'xxx',
        uid:123
      },
      {
        avatar:'xxx',
        uid:123
      }

    ]
  },
  {
    rank:2,        //排名
    current_hunt:1,//当前攻打得分身
    //主播信息
    host:{
      name:'abc', //主播名称
      avatar:'xxxx',//头像
      uid:56642,//id
      attck:2000,//攻击值

    },
    //主力输出名单
    members:[
      {
        avatar:'xxx',
        uid:123
      },
      {
        avatar:'xxx',
        uid:123
      },
      {
        avatar:'xxx',
        uid:123
      }

    ]
  }

]



summary={
  unlock: {
      boom:true,  //炸弹，解锁了
      cannon:false //大炮,未解锁
    },
  injury_value:2000, //怪兽所受的伤害值
  my_info:{  //个人信息
    avatar:'xxxxxx',
      uid:123,
      my_rank:20,
      has_award:true,//是否已经领过奖
    }

}



award={
  name:'5 coins'//获取的奖励

}
