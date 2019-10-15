import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	recipes: Recipe[] = [

		new Recipe('A Test Recipe', 'This is simply a test', 
			'https://www.gimmesomeoven.com/wp-content/uploads/2018/02/A-Couple-Cooks-Cauliflower-Black-Bean-Tacos-Recipe-with-Chipotle-Crema-5.jpg'),

	];

  constructor() { }

  ngOnInit() {
  }

  collapsed = true;

}
