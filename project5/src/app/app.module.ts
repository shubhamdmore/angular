import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { FormComponent } from './form/form.component';
import { Exp1Component } from './exp1/exp1.component';
import { Exp2Component } from './exp2/exp2.component';
import { DemoComponent } from './demo/demo.component';
import { PComponent } from './p/p.component';
import { CComponent } from './c/c.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    FormComponent,
    Exp1Component,
    Exp2Component,
    DemoComponent,
    PComponent,
    CComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
