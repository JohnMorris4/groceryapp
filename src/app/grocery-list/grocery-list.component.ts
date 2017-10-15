import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 8),
    new Ingredient('Cinnimon', 6),
    new Ingredient('Sugar', 2),
    new Ingredient('Salt', 4)
  ];
  constructor() { }

  ngOnInit() {
  }

}
