import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword = false;
  showErrors = false;
  
  registerForm: FormGroup = this.fb.group({
    firstName:        ['', [Validators.required]],
    lastName:         ['', [Validators.required]],
    email:            ['', [Validators.email, Validators.required]],
    password:         ['', [Validators.minLength(8), Validators.required]],
    confirmPassword:  ['', [Validators.required]]
  },{
    validator:  MustMatch('password', 'confirmPassword')
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(() => this.showErrors = false);
  }
  
  onSubmit(): void {
    if(this.registerForm.valid) {
        this.authService.register(this.registerForm.value).subscribe(data => console.log(data))
    }
    else {
      this.showErrors = true;
      console.log('not valid');
      
    }
  }

}
