import {Ingredient} from '../shared/ingredient.component';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 50),
    new Ingredient('Tomatoes', 50)
  ];

  constructor() { }

  getShoppingList() {
    // une copie d'ingredient
   return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }
}
