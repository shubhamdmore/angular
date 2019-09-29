import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './services/myservice.service';
// import { RouterOutlet } from '@angular/router';
// import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService],
  // animations: [ slideInAnimation ]
})
export class AppComponent  {

  //  getAnimationData(outlet: RouterOutlet) {
  //  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  title = 'myapp';
  text: string;
  constructor(private _as:MyserviceService){}

  ngOnInit()
  {
    this.text =this._as.display();
    console.log(this.text);
  }
}
