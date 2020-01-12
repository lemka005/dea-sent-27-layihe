import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

   
  }

  onDeleteTodo(counter:number){
    this.todos.splice(counter,1);
  }

  onUpdateTodo(counter:number){
  
    this.todo=this.todos[counter].todo;
    this.day=this.todos[counter].day;
    this.register=this.todos[counter].register;
    this.status=this.todos[counter].status;
  this.todoId=this.todos[counter].id;
  this.index=counter;
  }

}
