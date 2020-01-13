import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';
import * as fromCounter from '../../actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count:number }>
  ) {
  }

  ngOnInit() {
    // console.log(this.store.pipe(select('count')));
    this.count$ = this.store.pipe(select('count'));
  }

  increment = () => {
    console.log(this.count$);
    this.store.dispatch(fromCounter.increment());
  }

  decrement = () => {
    this.store.dispatch(fromCounter.decrement());
  }

  multiply = () => {
    this.store.dispatch(fromCounter.multiply({payloade:5}));
  }

  divide = () => {
    this.store.dispatch(fromCounter.divide({payloade:5}));
  }

  reset = () => {
    this.store.dispatch(fromCounter.reset());
  }

}
