import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { EmployesService } from './employes.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EmployesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
