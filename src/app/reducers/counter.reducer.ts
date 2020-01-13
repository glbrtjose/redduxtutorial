import { createReducer, on, props } from "@ngrx/store";
// import { increment, decrement, reset } from '../actions/counter.actions';
import * as fromCounter from '../actions/counter.actions';

export const initialState = 10;

const _counterReducer = createReducer(initialState,
    on(fromCounter.increment, state => state+1),
    on(fromCounter.decrement, state => state-1),
    on(fromCounter.multiply, (state,props) => state*props.payloade),
    on(fromCounter.divide, (state,props) => state/props.payloade),
    on(fromCounter.reset, () => 0)
);

export function counterReducer(state: number, action){
    // console.log(`Counter state: ${state}`);
    // console.log(`Counter action: ${action.type}`);
    return _counterReducer(state, action);
}