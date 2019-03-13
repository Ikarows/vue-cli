import axios from "axios"
import url from '@/config'
const host = url.base.host;
//https://api.imjad.cn/hitokoto.md
export default {
	getData(params) {
		return axios.get(host + '/hitokoto/', {params:params});
	}
}