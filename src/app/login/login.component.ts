import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  isEmailValid: boolean = true;

  constructor(private  router: Router) {
  }

  ngOnInit(): void {
  }

  validateEmail(): void {
    const pattern = RegExp(/^[a-zA-Z0-9_.+-]{2,}\@[a-zA-Z0-9_.+-]{2,}\.[a-zA-Z]{2,4}$/);
    if (pattern.test(this.email)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  onKey(event: any, type: string) {
    if (type === 'email') {
      this.email = event.target.value;
      this.validateEmail();
    } else if (type === 'password') {
      this.password = event.target.value;
    }
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

}
