import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  user: any = {};
  @ViewChild(NgForm) loginForm: NgForm;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loginForm.reset();
    }, 500);
  }

  echoForm() {
    console.log(this.user);
  }

}
