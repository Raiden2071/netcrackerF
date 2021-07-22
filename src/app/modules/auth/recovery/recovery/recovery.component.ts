import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  showErrors = false;
  recoveryForm: FormGroup = this.fb.group({
    field:  ['', [Validators.email, Validators.required]],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.recoveryForm.valueChanges.subscribe(v => this.showErrors = false);
  }

  onSubmit(): void {
    console.log(this.recoveryForm.controls.field);
    if(this.recoveryForm.valid) {

    }
    else {
      this.showErrors = true;
    }
  }

}
