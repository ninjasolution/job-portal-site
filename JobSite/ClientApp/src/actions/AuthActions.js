import { LOGIN } from "../containers";


export const loginAction = user => ({ type: LOGIN, payload: { data: user} })