import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  router: Router) {
  }

  ngOnInit(): void {
  }

  clicLogin(): void {
    this.router.navigate(['pages']);
  }

  login(loginForm: NgForm): void {
    console.log(loginForm.value);
    if (loginForm.value.email === 'admin@admin.com' && loginForm.value.password === '123456') {
      localStorage.setItem('email', loginForm.value.email);
      this.router.navigate(['/usuarios']);
    }
  }

  /*username: any;
  password: any;
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    username = e.target.elements[0].value;
    password = e.target.elements[1].value;
    console.log(username, password);
    return false;
  }*/
}
