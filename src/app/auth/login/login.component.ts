import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['doc@gmail.com', [Validators.required, Validators.email]],
    password: ['doc@gmail.com', [Validators.required, Validators.email]]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ){
  }

  login(){
    this.router.navigateByUrl('/');
  }

}
