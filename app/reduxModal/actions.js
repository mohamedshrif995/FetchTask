
export const GET_DATA = 'GET_DATA'
const API_URL = 'https://mocki.io/v1/c642d9a6-4763-4973-bf1d-053c36fe88b2'
export const getData = () => {
    try {
        return async dispatch => {
            const result = fetch(API_URL).then((res) => {
                const final = res.json()
                final.then((data) => {
                    console.log(`movmov`, data)
                    if (data && data) {
                        dispatch({
                            type: GET_DATA,
                            payload: data
                        })
                    }
                    else {
                        console, log('err')
                    }
                })
            })

        }
    } catch (error) {
        console.log(error)
    }
}