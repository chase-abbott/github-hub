export const INPUT = 'INPUT';
export const SUBMIT = 'SUBMIT';

export const inputAction = (value) => ({ type: INPUT, payload: value });
export const submitAction = (value) => ({ type: SUBMIT, payload: value });
