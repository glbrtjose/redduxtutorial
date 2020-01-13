import { createReducer, on, props, Action } from "@ngrx/store";
// import { increment, decrement, reset } from '../actions/counter.actions';
import * as fromLogin from '../actions/login-page.actions';
import { IState } from '../models/IState';
import { Generic } from '../models/Generic';

export const initialState: IState = {
  username:'Gilberto',
  password:'Parra'
}

const _loginReducer = createReducer(
    initialState,
    on(fromLogin.login, (state,props) => 
      (
        props
      )
    )
);

export function loginReducer(state: IState | undefined, action:Action){
    // console.log(`Login state: ${state}`);
    // console.log(state);
    // console.log(`Login action: ${action.type}`);
    return _loginReducer(state, action);
}