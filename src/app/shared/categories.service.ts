import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories = [ 
    {
      name: 'Grocery',
      items: [
        {
          id: 101,
          title: 'Dish washer',
          status: false
        },
        {
          id: 102,
          title: 'Eggs',
          status: false
        }
      ]
    },
    {
      name: 'Tools',
      items: [
        {
          id: 201,
          title: 'Screw Driver',
          status: false
        },
        {
          id: 202,
          title: 'Pliers',
          status: false
        },
        {
          id: 203,
          title: 'Sand Paper',
          status: false
        },
      ]
    },
    {
      name: 'Misc',
      items: [
        {
          id: 301,
          title: 'Hand Bags',
          status: false
        },
        {
          id: 302,
          title: 'Shoes',
          status: false
        }
      ]
    }
  ]
  constructor() { }

  getCategory() {
    return this.categories;
  }
}
