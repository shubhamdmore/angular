import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

  constructor() { }
   name = 'This is property binding';
  
   myfun()
   {
     console.log("This is event Bindin");
   }
  
}
