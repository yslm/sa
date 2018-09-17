
import Vue from 'vue'

//这个文件的目的是用于批量注册组件的
import add from './add_cut.vue'
import progress from './progress.vue'
import count from './CountDown.vue'

/*const componentsArr=[
  add,
  progress

];
componentsArr.forEach(component =>{
  Vue.component(component.name, component)
});*/

const components={

  install:function (Vue) {
    Vue.component('lo-add',add);
    Vue.component('lo-progress',progress);
    Vue.component('lo-count',count);
  }
}

export default components
