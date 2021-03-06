import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user!:User;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

}
