import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Cocido',
      imageUrl:
        'https://www.recetasderechupete.com/wp-content/uploads/2009/11/cocido_gallego.jpg',
      ingredients: ['Garbanzos', 'Zanahorias', 'Patata', 'Chorizo']
    },
    {
      id: 'r2',
      title: 'Cachopo',
      imageUrl:
        'https://www.lacocinademasito.com/files/cachopo-de-ternera-al-cabrales-13.jpg',
      ingredients: ['Ternera', 'Jamon', 'Queso', 'Patatas fritas']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
