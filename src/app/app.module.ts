import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TodoReducer } from './reducers/todo.reducer';
import { TodoComponent } from './components/todo/todo.component';
import { TodoSonComponent } from './components/todo-son/todo-son.component';
import { contadorReducer } from './reducers/contador.reducer';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoSonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        contador: contadorReducer
      }
    ),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
