import { GET_DATA } from './actions'
const initialState = {
    data: []
}
export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }

}