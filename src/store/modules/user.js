import axios from "axios"
import api from '@/api'

export default {
	state: {
		todo: 'this is vuex data'
	},
	mutations: {
		settodo (state, item) {
			state.todo = item;
		}
	},
	actions: {
		getData (store, msg) {
			axios.get(api.getData(msg)).then(function(data){
				console.log(data.data.result);
				store.commit('settodo', data.data.result);
			}).catch((err) => {
				console.log(err);
			})
		}
	},
	modules: {}
}