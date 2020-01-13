import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromScoreBoard from '../../actions/scoreboard-page.actions';

@Component({
  selector: 'app-scoreboard-page',
  templateUrl: './scoreboard-page.component.html',
  styleUrls: ['./scoreboard-page.component.scss']
})
export class ScoreboardPageComponent implements OnInit {

  count$: Observable<{
    home:number;
    away:number;
  }>;

  constructor(
    private store: Store<{
      game:{
        home:number;
        away:number;
      }
    }>
  ) {
  }

  ngOnInit() {
    this.count$ = this.store.pipe(select('game'));
  }

  increment = () => {
    this.store.dispatch(fromScoreBoard.awayScore());
  }

  decrement = () => {
    this.store.dispatch(fromScoreBoard.homeScore());
  }

  divide = () => {
    this.store.dispatch(fromScoreBoard.setScores({
      game:{
        home:0,
        away:0
      }
    }));
  }

  reset = () => {
    this.store.dispatch(fromScoreBoard.resetScore());
  }

}
