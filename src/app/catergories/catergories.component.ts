import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';

@Component({
  selector: 'app-catergories',
  templateUrl: './catergories.component.html',
  styleUrls: ['./catergories.component.scss']
})
export class CatergoriesComponent implements OnInit {

  categories = [];
  selectedCategory: string;
  isMenuOpen = false;

  constructor(public categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategory();
  }

  onSelect(category: string): void {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  addNewCategory() {
    let category = prompt("Enter Category name", "Some Category");
    let tempObj = {
      name: category,
      items: []
    }
    this.categories.push(tempObj);
  }

  menuState() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  deleteCategory(category: string): void{
   
  }
}
