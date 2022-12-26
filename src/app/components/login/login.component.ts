import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private route:Router) { }

  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
    if (this.auth.isExists('token')){
      this.route.navigateByUrl('/dashboard').then()
    }
  }

  login() {
      if (
        this.loginForm.get('username')?.value==='abc' &&
        this.loginForm.get('password')?.value==='1234'
      ){
        this.auth.setToken('my token data'); //dfsf
        this.route.navigateByUrl('/dashboard').then()
      }else{
        alert('try again');
      }
  }
}
