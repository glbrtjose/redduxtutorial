import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/models/AppState';
import { Store, select } from '@ngrx/store';
import { ResetAction } from 'src/app/actions/contador.actions';

@Component({
  selector: 'app-todo-son',
  templateUrl: './todo-son.component.html',
  styleUrls: ['./todo-son.component.scss']
})
export class TodoSonComponent implements OnInit {

  @Input() contador;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(select('contador')).subscribe(
      contador => {
        this.contador=contador
      }
    )
  }

  reset(){
    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
