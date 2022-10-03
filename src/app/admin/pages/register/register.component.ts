import { Component, OnInit } from '@angular/core';
import {SingUpFrom} from "../../../core/model/SignUpFrom";
import {AuthService} from "../../../core/service/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  hide = true;

  roles: string[] = [];
  name!: string;
  signUpForm!: SingUpFrom;

  status = 'please fill in';
  error1: any = {
    message:"nouser"
  }
  error2: any={
    message: "noemail"
  }

  success:any={
    message: "yes"
  }

  // @ts-ignore
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signUpForm = new SingUpFrom(
      this.form.username,
      this.form.password,
      this.form.email,
      this.form.name)

    this.authService.signUp(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'username đã tồn tại'
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'email đã tồn tại'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'create success'
      }
    })
  }

  // check_pass() {
  //   // @ts-ignore
  //   if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
  //     // @ts-ignore
  //     document.getElementById('submit').disabled = false;
  //   } else {
  //     // @ts-ignore
  //     document.getElementById('submit').disabled = true;
  //
  //   }
  // }
}
