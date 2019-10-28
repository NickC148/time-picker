import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimePickerComponent implements OnInit {
  @Input() date: Date;
  @Output() hourEmitter = new EventEmitter<any>();
  @Output() minuteEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setHour(event) {
    console.log('HH -> ', event);
    this.date.setHours(event);
    this.hourEmitter.emit(this.date);
  }

  setMinute(event) {
    console.log('MM -> ', event);
    this.date.setMinutes(event);
    this.minuteEmitter.emit(this.date);
  }

}
