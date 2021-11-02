import { LOGIN, LOGOUT } from "../containers";


export const loginAction = user => ({ type: LOGIN, payload: { data: user } })

export const logoutAction = () => ({ type: LOGOUT, payload: {  } })

