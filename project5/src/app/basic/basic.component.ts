import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  mystring = 'this is interpulation';

  myname = '';

  url="https://cdn.pixabay.com/photo/2019/07/30/06/00/rose-4372048__340.png"

  ngvalue = true;

  color = "blue";

  car = ["bmw","valvo","mcd","hd"];

  var = true;
  
  isdisableds = false;
  
  constructor() { }

  myfun()
  {
    document.write("this is event binding");
  }
  mytwdb(value)
  {
    document.write(value);
  }
  ngOnInit() {
  }

}
