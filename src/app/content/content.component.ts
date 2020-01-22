import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  todoList = [];
  index = 0;

  constructor(public categoriesService: CategoriesService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
     this.index = params['params'].id;
    });
    this.route.params.subscribe(routeParams => {
      this.getTodoList(routeParams.id);
    });
  }

  getTodoList(index: number) {
    this.todoList = this.categoriesService.categories[index].items
    console.log(this.todoList);
  }

  addNewTodoList() {
    let todoList = prompt("Enter TodoList", "Some List");
    let tempObj = {
      id: this.todoList['id'] + 1,
      title: todoList,
      status: false
    }
    this.todoList.push(tempObj);
  }
  }

