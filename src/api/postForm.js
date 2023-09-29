import axios from 'axios'

export async function postForm(payload) {
    // return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('name', JSON.stringify(payload.name))
        formData.append('phone', JSON.stringify(payload.number))
        formData.append('comment', JSON.stringify(payload.comment))
        formData.append("site", 'AVAgram')

            const promises = []

            promises.push(
                // axios.post('https://axas.ru/api/call_request.php', formData)
                Promise.reject('1')
            )

            console.log(payload.name, payload.number.replace("-", "").replace(" ", "").replace("+", "%2B"), payload.comment)
            promises.push(
                Promise.resolve('1')
                // axios.get(`https://axas.bitrix24.ru/rest/1/v43ow0q8h42amca5/crm.lead.add.json?FIELDS[TITLE]=avagram:call&FIELDS[NAME]=${encodeURIComponent(payload.name)}&FIELDS[EMAIL][0][VALUE]=nomail@exampe.com&FIELDS[PHONE][0][VALUE]=${payload.number.replace("-", "").replace(" ", "").replace("+", "%2B")}&FIELDS[OPPORTUNITY]=0&FIELDS[CURRENCY]=RUB&FIELDS[COMMENTS]=${encodeURIComponent(payload.comment)}`)
            )


            return Promise.any(promises)
            // .then(() => {
            //     console.log('any then');
            //     resolve()
            // })
            // .catch(() => {
            //     console.log('any catch');
            //     reject()
            // })
    // })
}


