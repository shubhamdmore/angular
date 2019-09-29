import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  constructor() { }

  display()
  {
    return "hi this is my service and it is imlimented";
  }
}
