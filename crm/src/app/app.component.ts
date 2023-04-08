import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm';
  name:string = "sam";
  age:number= 24;

  city(){
    return 'chennai';
  }

  isDisabled:boolean = false;
}
