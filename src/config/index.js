import dev from '@/config/dev.env'
import prod from '@/config/prod.env'
let config = null;

//区分测试环境和正式环境
if( /^baidu.com/.test(window.location.host) ) {
    config = prod
}else {
    config = dev
}

export default config;