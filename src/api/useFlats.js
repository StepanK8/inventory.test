// import {useApi} from '@/api/useApi.js'
// // import { reject } from 'core-js/fn/promise';

// export async function useFlats() {
//     return new Promise((resolve, reject) => {
//         let data;
//         useApi('api/v1/sc/apartments/?checking_enable=false')
//         .then((r) => {
//             data = r.data.data
//             resolve(data)
//         })
        
//     })
// }

import {useApi} from '@/api/useApi.js'

export async function useFlats( complexID = false, filters = false) {
    return new Promise((resolve, reject) => {
        ////console.log("&"+params);
        ////console.log(url.pathname+"/?"+params);
        let data;
        useApi('api/v1/sc/apartments/?checking_enable=true')
        .then((r) => {
            data = r.data.data;
            ////console.log("@@", data);
            data = data.map(el => {
    
                switch (Number(el.balcony)){
                    case 0:
                        el.balcony = "Нет" 
                    case 3:
                        el.balcony = "3+"
                }
    
                switch (Number(el.decoration)){
                    case 0:
                        el.decoration = "Черновая" 
                    case 1:
                        el.decoration = "Чистовая"
                    case 2:
                        el.decoration = "Под ключ" 
                }
                switch (Number(el.elevator)){
                    case 0:
                        el.elevator = "Нет" 
                    case 1:
                        el.elevator = "Пассажирский" 
                    case 2:
                        el.elevator = "Грузовой"
                    case 3:
                        el.elevator = "Пассажирский и Грузовой"
                }
    
                switch (Number(el.parking)){
                    case 0:
                        el.parking = "Нет" 
                    case 1:
                        el.parking = "Открытая" 
                    case 2:
                        el.parking = "Закрытая"
                    case 3:
                        el.parking = "Подземная"  
                }
    
    
                switch (Number(el.room_count)){
                    case 0:
                        el.name = "Студия" 
                        break
                    default:
                        ////console.log(Number(el.room_count) == 0);
                        el.name = `${el.room_count}-комнатная квартира`
                }
                return el
            })
            resolve(data)
            ////console.log(data);
        })
    })
}

