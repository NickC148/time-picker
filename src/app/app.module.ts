import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimePickerComponent } from './custom-components/time-picker/time-picker.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
