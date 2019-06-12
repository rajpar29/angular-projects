import { Component, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector:'recipe-item',
    templateUrl: './recipe-item.component.html'
})

export class RecipeItem {
    @Input('recipeData') recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<void>();


    onSelected() {
        this.recipeSelected.emit();
    }


}
