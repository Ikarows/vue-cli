
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css'

//解决ios click 300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

//使用 Mint
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

//使用 ElementUI
/*import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);*/

//取消 vue 在启动时生成生产提示
Vue.config.productionTip = false;

//路由拦截器
router.beforeEach((to, from, next) => {
	//存储token
	if(to.query.token){
		sessionStorage.token = to.query.token;
	}

	// 判断该路由是否需要登录权限
	if (to.meta.requireAuth) {  
		// 通过vuex state获取当前的token是否存在
        if (sessionStorage.token) {
            next();
        }else {
            next({
				path: '/login',
				// 将跳转的路由path作为参数，登录成功后跳转到该路由
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

// http request 拦截器
axios.interceptors.request.use((config) => {
	// 判断是否存在token，如果存在的话，则每个http header都加上token
	if (sessionStorage.token) {
		config.headers.common['Authorization'] = sessionStorage.token;
		config.headers.common['Auth-Token'] = sessionStorage.token;
	}
	return config;
},(err) => {
	return Promise.reject(err);
})

// http response 拦截器
axios.interceptors.response.use((response) => {
	return response.data;
},(error) => {
	if (error.response) {
		switch (error.response.status) {
			case 401:
				// 返回 401 清除token信息并跳转到登录页面
				//store.commit(types.LOGOUT);
				sessionStorage.removeItem("token");
				// router.replace({
				// 	path: 'login',
				// 	query: {redirect: router.currentRoute.fullPath}
				// })
		}
	}
	// 返回接口返回的错误信息
	return Promise.reject(error.response.data)
})

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
