import {useApi} from '@/api/useApi.js'
// import { reject } from 'core-js/fn/promise';

export async function useChecks() {
    return new Promise((resolve, reject) => {
        let data;
        useApi('/api/v1/ca/checklists/')
        .then((r) => {
            data = r.data.data
            resolve(data)
        })
        
    })
}


