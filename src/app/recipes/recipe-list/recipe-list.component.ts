import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [

		new Recipe('A Test Recipe', 'This is simply a test', 
			'https://m6udbe444b-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/YLR-logo@3x.png'),

    new Recipe('Another Test Recipe', 'This is simply a test', 
      'https://m6udbe444b-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/YLR-logo@3x.png'),
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  collapsed = true;

}
