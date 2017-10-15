import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Beef Barley Vegetable Soup', 'Slow cooker, hearty, easy. Serenjoy.',
     'http://images.media-allrecipes.com/userphotos/720x405/348836.jpg'),
     new Recipe('Rugelach', 'Were well into fall, and its nearly time to start planning your holiday baking.',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/ChocolateRugelach.JPG/800px-ChocolateRugelach.JPG')
  ];
  constructor() { }

  ngOnInit() {
  }

}
