import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(private _router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }
  login() {
    this._router.navigate(['home']);
  }
  register() {
    this._router.navigate(['register']);
  }
}
