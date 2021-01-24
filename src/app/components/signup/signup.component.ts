import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  singupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      email: ['',[Validators.email, Validators.required]],
      pwd: [''],
      confimPwd: ['']
    })
  }
  signup() {
    if (this.singupForm.valid) {
      console.log("This is my object: ", this.singupForm.value);
      this.singupForm.reset();
    }
  }

}
