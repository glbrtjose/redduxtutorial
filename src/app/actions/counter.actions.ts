import { createAction, props } from '@ngrx/store';
import { Generic } from '../models/Generic';

export const increment = createAction('[Counter Component] Increment'
);
export const decrement = createAction('[Counter Component] Decrement');
export const multiply = createAction('[Counter Component] Multiply',
    props<Generic>()
);
export const divide = createAction(
    '[Counter Component] Divide',
    props<Generic>()
);
export const reset = createAction('[Counter Component] Reset');