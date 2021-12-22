

export const LOAD_JOBS = 'LOAD_JOBS';

export const loadJobAction = jobs => ({ type: LOAD_JOBS, payload: { data: jobs } })

