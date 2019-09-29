import { Component, OnInit ,Output} from '@angular/core';
// import { Child1Component } from '../child1/child1.component';


@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  
  mydata = 'this is example of pipe';

  constructor() { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


 
}
