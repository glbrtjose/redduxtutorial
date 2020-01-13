import { createAction, props } from '@ngrx/store';
import { IState } from '../models/IState';

export const login = createAction(
    '[Login Page] login',
    props<IState>()
);