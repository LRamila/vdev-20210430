import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    headers: {
        'content-type': 'application/json'
    },
});

export default {
    getData: (url: any, method: any, param: any) =>
        instance({
            'method': method,
            'url': url,
            'params': param,
            transformResponse: [function (data) {
                const json = JSON.parse(data)
                return json;
            }],
        })
}