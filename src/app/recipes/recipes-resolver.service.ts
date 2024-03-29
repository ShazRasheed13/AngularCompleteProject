import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

//It's used to ensure that the necessary data for a component is available before the component is displayed. 
@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
constructor(private datastorageService: DataStorageService,private recipeService:RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {

        if(this.recipeService.getRecipes().length===0){
        return this.datastorageService.fetchRecipes();}
        else{
            return this.recipeService.getRecipes();
        }
    }
}