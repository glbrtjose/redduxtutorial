import { Action, createReducer, on } from "@ngrx/store";

import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

export interface IScoreboard{
    home:number;
    away:number;
}

export const initialState:IScoreboard={
    home:0,
    away:0
}

const _scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore,
        state => ({
            ...state,
            home:state.home+1
        })
    ),
    on(ScoreboardPageActions.awayScore,
        state => ({
            ...state,
            away:state.away+1
        })
    ),
    on(ScoreboardPageActions.resetScore,
        state => ({
            home:0,
            away:0
        })
    ),
    on(ScoreboardPageActions.homeScore,
        (state,game) => ({
            home:2,
            away:2
        })
    )
);

export function scoreboardReducer(state: IScoreboard | undefined, action:Action){
    return scoreboardReducer(state,action);
}