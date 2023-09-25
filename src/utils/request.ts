import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getToken } from './cookie'

console.log(import.meta.env);

export class Request {
    // axios实例
    instance: AxiosInstance
    // 基础配置
    baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.VITE_APP_BASE_URL, timeout: 10000 }

    constructor(config: AxiosRequestConfig){
        // 使用axiso.create创建axios实例，配置为基础配置和传入配置
        this.instance = axios.create(Object.assign(this.baseConfig,config))

        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig)=>{
                const token = getToken()
                if(token){
                    config.headers!.Authorization = token
                }
                return config
            },
            (err:any)=>{
                return Promise.reject(err)
            }
        )

        // 响应拦截器
        this.instance.interceptors.response.use(
            (res:AxiosResponse)=>{
                console.log(res);
                return res
            },
            (err: any)=>{
                let message = '';
                switch (err.response.state){
                    case 400:
                        message = "请求错误(400)";
                        break;
                    case 401:
                        message = "未授权，请重新登录(401)";
                        // 这里可以做清空storage并跳转到登录页的操作
                        break;
                    case 403:
                        message = "拒绝访问(403)";
                        break;
                    case 404:
                        message = "请求出错(404)";
                        break;
                    case 408:
                        message = "请求超时(408)";
                        break;
                    case 500:
                        message = "服务器错误(500)";
                        break;
                    case 501:
                        message = "服务未实现(501)";
                        break;
                    case 502:
                        message = "网络错误(502)";
                        break;
                    case 503:
                        message = "服务不可用(503)";
                        break;
                    case 504:
                        message = "网络超时(504)";
                        break;
                    case 505:
                        message = "HTTP版本不受支持(505)";
                        break;
                    default:
                        message = `连接出错(${err.response.status})!`;
                }
                return Promise.reject(err.response);
            }
        )
    }

    // 定义请求方法
    public request(config: AxiosRequestConfig): Promise<AxiosResponse>{
        return this.instance.request(config)
    }

    public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse>{
        return this.instance.get(url, config);
    }

    public post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.post(url, data, config);
    }
}

export default new Request({})