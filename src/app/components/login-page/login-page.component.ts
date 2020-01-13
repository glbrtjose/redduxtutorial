import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IState } from 'src/app/models/IState';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromLogin from "../../actions/login-page.actions";
import { Generic } from 'src/app/models/Generic';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  myForm:FormGroup;
  currentUser$: Observable<IState>;

  constructor(
    private formBuilder:FormBuilder,
    private store:Store<{login:IState}>
  ) {

  }

  ngOnInit() {
    this.store.pipe(select("login")).subscribe(
        (data:any) => {
          this.currentUser$=data
        }
      );
    this.myForm=this.formBuilder.group({
        username:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    );
  }

  onSubmit = ():void => {
    console.log(this.currentUser$);
    this.store.dispatch(fromLogin.login(
        this.myForm.value
      )
    );
  }

}
