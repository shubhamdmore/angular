import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShubhamComponent } from './shubham/shubham.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { IfSwitchComponent } from './if-switch/if-switch.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { MydirectiveDirective } from './mydirective.directive';
import { NgifComponent } from './ngif/ngif.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    ShubhamComponent,
    TwowaybindingComponent,
    IfSwitchComponent,
    AttributeDirectiveComponent,
    MydirectiveDirective,
    NgifComponent,
    DatabindingComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
