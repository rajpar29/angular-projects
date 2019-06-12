import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {

   constructor(private slService: ShoppingListService) {}

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [new Ingredient('dfghwquu', 20), new Ingredient('qqqqq', 678)]),
        new Recipe('Another Test Recipe',
         'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [new Ingredient('hello', 2), new Ingredient('dfgrrr', 67)])
      ];
  // public recipeSelected = new EventEmitter<Recipe>();


      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
         return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
         this.slService.addIngredients(ingredients);
      }
}
