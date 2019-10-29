import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent implements OnInit {

  @Output() featuredSelect = new EventEmitter<string>(); //The '()' means that is instantiated

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
  	this.featuredSelect.emit(feature);
  }

}
