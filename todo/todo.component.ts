import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todoList:any=[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.listToDos();
  }

  createTodo()
  {
    console.log('Button called');
  let todo={
    id: new Date().getTime(),
    title:'format the data of firebase'
  }

  this.todoService.create(todo).subscribe((Response) =>{console.log('todo create', Response);
                                                        this.listToDos();},
                                          (error)=>{console.log('Error', error);});

  }


listToDos(){
  this.todoService.list().subscribe((res)=>{console.log(res);
                                            this.todoList=res;},
                                    (error)=>{console.log(error)});
  //this res will get array of object from server

}

editTodo(todo:any){
let editData={
  id: new Date().getTime(),
  title:'Edit Title'
}
this.todoService.update(todo.id,editData).subscribe(res=>{this.listToDos()});
}

deleteTodo(id:any){
this.todoService.delete(id).subscribe(res=>{console.log('Record has been deleted.');
                                            this.listToDos();
                                            });
}

}//onit
