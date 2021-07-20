import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = true;
  showErrors = false;

  loginForm: FormGroup = this.fb.group({
    email:    ['', [Validators.email ,Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {}

  openRegister() {}

}
