import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  ngOnInit(): void {
    console.log('bu komponentin daxilinde olan butun' +
      'deyisenler yarandi ve, siz bu zaman ne' +
      'is gormek isteyirsinizse bura yazin');

    this.todosOriginal = this.todos.slice();

    this.audio.src = "../../assets/ses.wav";
    this.audio.load();

let t1:Task=new Task(1);
t1.todo='java';
t1.day=12;
let date1:Date=new Date();
date1.setFullYear(2010);
t1.register=date1;
t1.status='done';

let t2:Task=new Task(2);
t2.todo='css';
t2.day=17;
let date2:Date=new Date();
date2.setFullYear(2000);
t2.register=date2;
t2.status=' note done';

    this.todos.push(t1,t2);

  }
   todo:Task=new Task(0);
  todoId: number = 0;
  index: number = 0;
  todos: Task[] = [];

  onSaveTodo() {
    if (this.todoId === 0) {
      let id = this.todos.length + 1;
      let todo:Task=new Task(id);
      todo.todo=this.todo.todo;
      todo.day=this.todo.day;
      todo.register=this.todo.register;
      todo.status=this.todo.status;

      this.todos.push(todo);
    } else {

      this.todos[this.index]  = this.todo;
     
    }
this.todo=new Task(0);
    this.todosOriginal = this.todos.slice();
  }

  onDeleteTodo(counter: number) {
    this.todos.splice(counter, 1);
    this.todosOriginal = this.todos.slice();
  }

  onUpdateTodo(counter: number) { 
    this.todo = this.todos[counter] ; 
    this.todoId = this.todos[counter].id;
    this.index = counter;
  }
  onResetTodo() {
    this.todoId = 0;
  }

  todosOriginal = [];
  searchText: string = '';
  search() {

    let todos = this.todosOriginal.slice();
    this.todos = [];
    for (let index = 0; index < todos.length; index++) {
      const t = todos[index];
      let s = t.todo + t.day + t.register + t.status;
      console.log(s);
      if (s.includes(this.searchText)) {
        this.todos.push(t);
      }
    }

  }
  audio = new Audio();
  seslendir() {



    this.audio.play();

  }
  sesiDayandir() {
    this.audio.pause();
  }
  sesiDayandir2() {
    this.audio.load();
    this.audio.play();
  }
}
