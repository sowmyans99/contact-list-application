import { Component, OnInit } from '@angular/core';

import { JsonService } from './json.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Contact List Application';
  public jsonData: any;
  contentEditable = 'false';
  isReadonly = true;

addTable() {
  const obj = {
    id: '',
    name: '',
    email: ''
  }
  this.jsonData.push(obj)
}
deleteRow(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.jsonData.splice(x, 1 );
  }   
} 
editRow(y) {
  var ediBtn = confirm(" Do you want to edit ?");
  
  if ( ediBtn == true ) {
     this.isReadonly = !this.isReadonly;
  } 
}
  constructor(
    private jsonService: JsonService) {
  }
  
  public ngOnInit(): void {
    this.jsonService.getData()
      .subscribe((data: any): void => {
        console.info(data);
        this.jsonData = data;
      });
  }
  
  
}
