import { LOAD_PROFILE } from "../actions/ProfileActions";

export default function ProfileReducer(state = [], { type, payload } ) {

    switch (type) {
        case LOAD_PROFILE: return payload.data;
        default: return state;
    }
}
