import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('bu komponentin daxilinde olan butun'+ 
    'deyisenler yarandi ve, siz bu zaman ne'+
    'is gormek isteyirsinizse bura yazin');

    this.todosOriginal=this.todos.slice();

    this.audio.src = "../assets/ses.wav";
      this.audio.load();
  }
   todo:string='';
   day:number;
   register:Date=new Date();
   status:string='not done';
   todoId:number=0;
   index:number=0;
  todos=[
    {id:1,todo:'learn java',day:12,register:new Date(),status:'not done'},
    {id:2,todo:'learn html',day:13,register:new Date(),status:'done'},
    {id:3,todo:'learn css',day:14,register:new Date(),status:'not done'}
    
  ];

  onSaveTodo(){
if(this.todoId===0){
 let id=this.todos.length+1;
    let todo={id:id,todo:this.todo,day:this.day,register:this.register,status:this.status};
this.todos.push(todo);
}else{
  
  this.todos[this.index].todo=this.todo;
  this.todos[this.index].day=this.day;
  this.todos[this.index].register=this.register;
  this.todos[this.index].status=this.status;
}

this.todosOriginal=this.todos.slice();
  }

  onDeleteTodo(counter:number){
    this.todos.splice(counter,1);
    this.todosOriginal=this.todos.slice();
  }

  onUpdateTodo(counter:number){
   
    this.todo=this.todos[counter].todo;
    this.day=this.todos[counter].day;
    this.register=this.todos[counter].register;
    this.status=this.todos[counter].status;
  this.todoId=this.todos[counter].id;
  this.index=counter;
  }
  onResetTodo(){
    this.todoId=0;
  }

  todosOriginal=[];
  searchText:string='';
  search(){
     
    let todos=this.todosOriginal.slice();
this.todos=[];
    for (let index = 0; index < todos.length; index++) {
      const t = todos[index];
      let s=t.todo+t.day+t.register+t.status;
      console.log(s);
      if(s.includes(this.searchText)){
        this.todos.push(t);
      }
    }

  }
    audio = new Audio();
  seslendir(){
    
     
      
      this.audio.play();
   
  }
  sesiDayandir(){
    this.audio.pause();
  }
  sesiDayandir2(){
  this.audio.load();
  this.audio.play();
  }
}
