import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() header_title!:string | undefined;
  @Input() header_icon!:string | undefined;
  @Input() welcome_needed!:boolean | undefined;
  @Input() filter_needed!:boolean | undefined;

  @Input() searchText_header:string | undefined;
  @Output() searchText_headerChange = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  change(newValue:string) {
    this.searchText_header = newValue;
    this.searchText_headerChange.emit(newValue);
  }

}
