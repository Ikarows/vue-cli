import axios from "axios"
import api from './api/index.api'
//https://api.imjad.cn/hitokoto.md
export default {
	getData(params) {
		return axios.get(api.hitokoto, {params:params});
	}
}
