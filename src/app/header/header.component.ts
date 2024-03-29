import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  onSaveDataToApi() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
