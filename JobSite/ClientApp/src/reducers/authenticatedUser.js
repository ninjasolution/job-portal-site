import { LOGIN } from "../containers";

export const auth = (state = {}, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload.data   
            }
    
        default:
            return {
                user: null
            }
    }
}