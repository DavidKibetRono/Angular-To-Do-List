import { Component } from '@angular/core';
import { MyToDoClass } from './my-to-do-class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // inputs!:any;
  mytodos:MyToDoClass[]=[
    {
      content:"PHP",
      completed:false
    },
    {
      content:"Java",
      completed:false
    },

    {
      content:"javaScript",
      completed:false
    },
    {
      content:"Python",
      completed:false
    }
  ]

  strikeContent(id:number){
    this.mytodos.map((value,index)=>{
      if(index===id) {
        value.completed=!value.completed
      }
      return value
    })
  }

  deleteContent(id:number){
    this.mytodos=this.mytodos.filter((value,index)=>index!==id)
  }
  
  addList(data:any){

    this.mytodos.push({
      content:data,
      completed:false
    });

    // this.inputs="";

  }
}
