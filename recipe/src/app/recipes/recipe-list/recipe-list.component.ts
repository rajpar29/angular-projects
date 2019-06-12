import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe('test', 'tasty', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'),
  new Recipe('test2', ' very tasty', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
