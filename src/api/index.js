import axios from "axios"
//https://api.imjad.cn/hitokoto.md
export default {
	getData(params) {
		return axios.get('/hitokoto/', {params: params});
	}
}