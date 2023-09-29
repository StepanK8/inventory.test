import {postApi} from '@/api/useApi.js'
// import { reject } from 'core-js/fn/promise';

export async function postImage(payload) {
    return new Promise((resolve, reject) => {
        let data;
        let formData = new FormData()
        formData.append("image", payload)
        postApi('api/v1/ca/reports/images/', formData)
        .then((r) => {
            data = r.data.data
            resolve(data)
        })
        
    })
}


