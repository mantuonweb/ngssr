import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = "";
  //error$:Observable<string>;
  form: FormGroup;
  isLoggedIn$: Observable<boolean>;
  constructor(private fb: FormBuilder,private router:Router) {
    
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  submit() {
    if (this.form.valid) {
      let user: any = {
        userId: this.form.value.username,
        password: this.form.value.password
      }
      this.router.navigate(["home"])
      //this.store.dispatch(AuthState.Actions.LoginStartedAction({ user }));
    }
  }


  ngOnInit(): void {
    // this.isLoggedIn$.subscribe(isLoggedIn=>{
    //   if(isLoggedIn){
    //     this.router.navigate(['products']);
    //   }
    // })
  }

}
