import { Action } from 'redux';
declare const reducers: <A extends Action>(state: any, action: A) => any;
export default reducers;
