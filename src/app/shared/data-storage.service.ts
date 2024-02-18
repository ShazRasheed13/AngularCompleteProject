import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
// import { map } from 'rxjs-compat/operator/map';
import { map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipeproject-1b890-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

fetchRecipes() {
    return this.http
        .get<Recipe[]>(
            'https://recipeproject-1b890-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
        )
        .pipe(map((recipes) => {
            return recipes
                .map((recipe) => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                });
            }),
            tap(recipes=>{
                this.recipeService.setRecipes(recipes)
            }))
}}
