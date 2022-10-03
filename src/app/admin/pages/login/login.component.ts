import { Component, OnInit } from '@angular/core';
import {SingInFrom} from "../../../core/model/SingInFrom";
import {AuthService} from "../../../core/service/auth.service";
import {TokenService} from "../../../core/service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  form: any = {};
  hide = true;

  roles: string[] = [];
  name!: string;
  signInForm!: SingInFrom;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router:Router) {
  }


  ngSubmit() {
    this.signInForm = new SingInFrom(this.form.username, this.form.password)
    this.authService.signIn(this.signInForm).subscribe(data => {
      // nếu có đăng nhập,có token
      if (data.token != undefined) {
        // khi có đăng nhập thì set trên localStorage
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRoles(data.roles);
        this.tokenService.setAvatar(data.avatar);

        this.router.navigate(['blog/menu']).then(()=>{
          window.location.reload();
        })
      }
    })
  }
}
