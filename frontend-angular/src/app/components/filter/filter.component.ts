import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() searchText: string | undefined;
  @Output() searchTextChange = new EventEmitter();

  change(newValue:string) {
    this.searchText = newValue;
    this.searchTextChange.emit(newValue);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
