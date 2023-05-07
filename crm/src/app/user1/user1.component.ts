import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss']
})
export class User1Component {
@Output() neweve=new EventEmitter <string>();

send(){
  let data:any ={name:"SJ", age:15}
  this.neweve.emit(data)
}
}
