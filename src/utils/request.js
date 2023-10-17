import axios from "axios";
const base_URL = "http://localhost:8081";

export const request = (url, method, param) => {
    return axios({
        url: base_URL + url,
        method: method,
        data: param,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.data
    }).catch(err => {
        console.info(err);
        return false
    })
}