import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm';

  // string interpolation
  name:string = "sam";
  age:number= 24;

  city(){
    return 'chennai';
  }


  // property binding
  isDisabled:boolean = false;

  name1:string= "sam";



  // event binding
  change(){
    this.name1 ="SJ";
  }

  // Two way data binding
  status: string ="enter name" ;
  changes(){
    this.status ="name entered";
  }

  name2: string ="sam";

  name3: string ="";
  text: string = "hey!! You haven't added the content"

  changed(){
    this.text ="Your content is "+this.name3;
  }


  // pipes
  names: string ="SJ";

  names1: string ="sam";
  nowdate = Date();
  value: number = 300;
  PERCENTVALUE:number =0.0278;
  decvalue = "12.00056";
}