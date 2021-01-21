import axios from 'axios'

const instance = axios.create()

// Add a request interceptor
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error.response.data);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
    return Promise.resolve(response.data)
}, (error) => {
    if (error.response) {
        let data = JSON.parse(error.config.data)
        let res = {
            ...error.response.data,
            error_name: (error.response.status === 403)
                ? error.response.data.error_name
                : error.response.statusText,
            status_code: error.response.status,
        }
        return Promise.reject(res)
    } else if (error.request) {
        return Promise.reject(error.request)
    } else {
        return Promise.reject(error.message)
    }
});




export default (method, url, data = null) => {
    if (method == 'post') {
        // return instance.post(url, data, {params: page })
        return instance.post(url, data)
    } else if (method == 'get') {
        return instance.get(url + data)
    } else {
        return false
    }
}

