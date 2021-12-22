import { LOAD_JOBS } from "../actions/JobActions";

export default function JobsReducer(state = [], { type, payload } ) {

    switch (type) {
        case LOAD_JOBS: return payload.data;
        default: return state;
    }
}
