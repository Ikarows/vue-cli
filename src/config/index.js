import dev from '@/config/dev.env'
import prod from '@/config/prod.env'
let config = null;

if (process.env.NODE_ENV == 'development') {
  config = dev; //开发环境请求地址
} else if (process.env.NODE_ENV == 'production') {
  config = prod; //生产环境请求地址
}

export default config;
