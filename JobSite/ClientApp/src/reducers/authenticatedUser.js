import { LOGIN, LOGOUT } from "../containers";

export const auth = (state = {}, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload.data   
            }
        case LOGOUT:
            return {
                user: null
            }
        default:
            return {
                user: null
            }
    }
}