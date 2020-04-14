import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.component';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppListService.getShoppingList();
    this.shoppListService.ingredientsAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
