import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  theDateYouWantToDoStuffWith: Date;

  constructor() { }

  ngOnInit() {
    this.theDateYouWantToDoStuffWith = new Date();
  }

  setHours(event) {
    this.theDateYouWantToDoStuffWith = event;
    console.log(this.theDateYouWantToDoStuffWith);
  }
  setMinutes(event) {
    this.theDateYouWantToDoStuffWith = event;
    console.log(this.theDateYouWantToDoStuffWith);
  }

}
