import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Shnitzel',
      imageUrl:
        'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5-500x500.jpg',
      ingredients: ['French fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://bake-eat-repeat.com/wp-content/uploads/2019/05/Homemade-Spaghetti-Sauce-4-copy.jpg',
      ingredients: ['Meat', 'spaghetti', 'Vegetables']
    },
    {
      id: 'r3',
      title: 'Kabab',
      imageUrl:
        'http://www.recipeindianfood.com/wp-content/uploads/2019/06/seekh-kebab.jpg',
      ingredients: ['Meat', 'Lattce', 'Onion']
    }
  ];
  constructor() {}

  getAllRecipies() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
