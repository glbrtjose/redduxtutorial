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
import { counterReducer } from './reducers/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginReducer } from './reducers/login.reducer';
import { scoreboardReducer } from './reducers/scoreboard.reducer';
import { ScoreboardPageComponent } from './components/scoreboard-page/scoreboard-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoSonComponent,
    MyCounterComponent,
    LoginPageComponent,
    ScoreboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        login: loginReducer,
        contador: contadorReducer,
        count: counterReducer,
        // game: scoreboardReducer
      },
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
