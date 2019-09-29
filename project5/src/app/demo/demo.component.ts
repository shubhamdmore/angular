import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  mydata = "This is interpulation";

  isdisableds = false;


  
  myfunction(value)
  {
    document.write(value);
  }
 

  myfun()
  {
    alert("this is event binding");
  }

  name = '';

  twodb(value)
  {
      document.write(value);
  }
  
  names = ["shubham","rohan","mohini","ganesh","mahesh","avi","vaibhav","vivek"];



  color = "green";

  ngOnInit() {
  }


}
