import axios from "axios"
import baseHost from '@/config/index'
import api from './api/index.api'

//https://api.imjad.cn/hitokoto.md

const host = baseHost.base.host;

export default {
	getData(params) {
		return axios.get(host + api.hitokoto, {params:params});
	}
}
