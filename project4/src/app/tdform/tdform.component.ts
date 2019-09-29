import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent  {

  users = [];
  constructor() { }

  ngOnInit() {
  }

  printform(loginform : NgForm){
    console.log(loginform.value);
    this.users.push(loginform.value);        // to write data in aray
    loginform.reset();
    console.log(this.users);      // to write data in aray
  }

  
}
