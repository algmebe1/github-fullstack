import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  title: string = "Profile";
  icon: string = "../../../assets/images/HeaderIcons/arrow_back_white.svg";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  onLogOut() {
    localStorage.clear()
    this.router.navigate(['login']);
  }
}
