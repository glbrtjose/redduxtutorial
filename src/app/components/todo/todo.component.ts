import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { select,Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { AppState } from 'src/app/models/AppState';
import { MultiplicarAction, DividirAction } from 'src/app/actions/contador.actions';
// import {  } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() contador;
  @Output() cambioContador = new EventEmitter<number>();

  todos: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.pipe(select('contador')).subscribe(
      contador => {
        this.contador=contador
      }
    )
  }

  multiplicar(){
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir(){
    const action = new DividirAction(5);
    this.store.dispatch(action);
  }

}
