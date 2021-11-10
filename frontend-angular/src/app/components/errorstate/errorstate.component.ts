import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errorstate',
  templateUrl: './errorstate.component.html',
  styleUrls: ['./errorstate.component.css']
})
export class ErrorstateComponent implements OnInit {

  @Input() errorMessage!:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
