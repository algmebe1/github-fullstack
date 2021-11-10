import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() nav_title!:string | undefined;
  @Input() nav_icon!:string | undefined;


  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back()
  }

}
