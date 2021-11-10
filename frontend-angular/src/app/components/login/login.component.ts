import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  feedback: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(username: string, pat: string): void {
    this.loginService.getUser(username, pat).subscribe((u) => {
      if (u && u.login === username) {
        localStorage.setItem('user', JSON.stringify(u));
        localStorage.setItem('pat', pat);
        this.router.navigate(['list']);
      } else {
        this.feedback = 'Incorrect username or password';
      }
    });
  }

  resetFeedback() {
    this.feedback = '';
  }
}
