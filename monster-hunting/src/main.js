// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './utils'
import './utils'

import axios from 'axios';


//全局注册组件，进度条以及加减按钮
// import './components/com/index.js'

import components from './components/com/index'

Vue.use(components);

import msgbox from './plugs/msgbox/index'
Vue.use(msgbox);
import VueLoading from './plugs/load/index'
Vue.use(VueLoading);

// import dialog from './plugs/dialog/index'
// Vue.use(dialog);

/*引入全局过滤器*/
Vue.filter('clipPic', function (url) {

  if(url&&url.indexOf('wangsu-image.rings.tv')!==-1){
    return url+'?w=80'
  }else {
    return url;
  }
  // 返回处理后的值
})
/*自定义指令，长按指令*/

Vue.directive('longpress', {
  bind: function(el, binding, vNode) {
    // 确保提供的表达式是函数
    if (typeof binding.value !== 'function') {
      // 获取组件名称
      const compName = vNode.context.name;
      // 将警告传递给控制台
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `;
      if (compName) { warn += `Found in component '${compName}' `}

      console.warn(warn);
    }

    // 定义变量
    let pressTimer = null;

    // 定义函数处理程序
    // 创建计时器（ 1秒后执行函数 ）
    let start = (e) => {

      if (e.type === 'click' && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler();
        }, 5000)
      }
    }

    // 取消计时器
    let cancel = (e) => {

      // 检查计时器是否有值
      if ( pressTimer !== null ) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    }

    // 运行函数
    const handler = (e) => {
      // 执行传递给指令的方法
      binding.value(e)
    }

    // 添加事件监听器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);

    // 取消计时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  }
})


/*拦截请求和相应*/
axios.interceptors.request.use(config => {
  // element ui Loading方法
  // console.log('拦截请求');


  // console.log(router);
  Vue.prototype.$loading();

  return config
}, error => {

  return Promise.reject(error)
});
/**/
axios.interceptors.response.use(data => {

  // console.log('拦截响应');
  Vue.prototype.$loading.end();
  return data
}, error => {
  Vue.prototype.$loading.end();
  return Promise.reject(error)
});

Vue.use(router)
/*申明一个独立的空vue实例*/
Vue.prototype.Event=new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
