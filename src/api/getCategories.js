import { useApi } from '@/api/useApi.js'
// import { reject } from 'core-js/fn/promise';

export async function getCategories() {
    return new Promise((resolve, reject) => {
        let data;
        useApi('/api/cp/categories/')
            .then((r) => {
                data = r.data.data
                data.forEach(category => {
                    category.products.map(product => {
                        product.amount = 0
                        product.price = Math.round(product.price / 100)
                        return product
                    })
                })
                resolve(data)
            })

    })
}


