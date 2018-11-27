import api from '@/resources/index'

export default {
	namespaced: true, //带命名空间的模块
	state: {
		todo: []
	},
	mutations: {
		setTodo(state, item) {
			state.todo = item;
		}
	},
	actions: {
		getData(store, params) {
			api.getData(params).then((res) => {
				console.log(res)
				store.commit('setTodo', res.data);
			}).catch((err) => {
				console.log(err);
			});
		}
	}
}
