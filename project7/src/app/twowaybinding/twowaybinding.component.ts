import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
   condition = false;
  user = [
    {
      id :123,
      name : 'shubham'
    },
    {
      id :124,
      name : 'Rohan'
    },
    {
      id :125,
      name : 'Sachin'
    },
    {
      id :126,
      name : 'Arjun'
    },
    {
      id :127,
      name : 'Readdy'
    },
  ]

  constructor() {
           
    
   }
   removeUser(user)
   {
     let index = this.user.indexOf(user);
     this.user.splice(index,1);
     this.condition = true;
   }

  ngOnInit() {
  }

}
