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

  name1:string= "sam";

  change(){
    this.name1 ="SJ";
  }

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

}