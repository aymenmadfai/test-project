import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
  
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }
  login() {
    console.log('User: ', this.user);
    this.router.navigateByUrl('/admin');
  }

}
