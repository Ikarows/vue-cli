import axios from "axios"
import api from '@/api'

export default {
	state: {
		todo: []
	},
	mutations: {
		settodo (state, item) {
			state.todo = item;
		}
	},
	actions: {
		getData (store, params) {
			axios.get(api.getData, {params:params}).then(data => {
				console.log(data)
				store.commit('settodo', data.data);
			}).catch((err) => {
				console.log(err);
			})
		}
	}
}