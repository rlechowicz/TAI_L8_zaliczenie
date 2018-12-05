import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  filterText: string;

  @Output() name = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendFilter() {
    this.name.emit(this.filterText);
  }

}
