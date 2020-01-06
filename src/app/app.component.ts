import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './models/AppState';

// import { IncrementarAction, DecrementarAction } from './actions/contador.actions';
import * as fromContador from './actions/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectv8SCSS';
  contador:number;

  constructor(private store:Store<AppState>){
    this.contador=10;
    this.store.select('contador').subscribe(
      state => 
        this.contador=state
    );
  }

  incrementar(){
    // this.contador++;
    const action = new fromContador.IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar(){
    
    const action = new fromContador.DecrementarAction();
    this.store.dispatch(action);
  }

}
