import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dateselector',
  templateUrl: './dateselector.component.html',
  styleUrls: ['./dateselector.component.css']
})
export class DateselectorComponent implements OnInit {

  // exteranl parent component should pass this data from outside
  data = [
    { 'day': 'WED', date: 1 },
    { 'day': 'THU', date: 2 },
    { 'day': 'FRI', date: 3 },
    { 'day': 'SAT', date: 4 },
    { 'day': 'SUN', date: 5 },
    { 'day': 'MON', date: 6 },
    { 'day': 'TUE', date: 7 },
    { 'day': 'WED', date: 8 },
    { 'day': 'THU', date: 9 },
    { 'day': 'FRI', date: 10 },
    { 'day': 'SAT', date: 11 },
    { 'day': 'SUN', date: 12 },
    { 'day': 'MON', date: 13 },
    { 'day': 'TUE', date: 14 },
    { 'day': 'WED', date: 15 },
    { 'day': 'THU', date: 16 },
    { 'day': 'FRI', date: 17 },
    { 'day': 'SAT', date: 18 },
    { 'day': 'SUN', date: 19 },
    { 'day': 'MON', date: 20 },
    { 'day': 'TUE', date: 21 },
    { 'day': 'WED', date: 22 },
    { 'day': 'THU', date: 23 },
    { 'day': 'FRI', date: 24 },
    { 'day': 'SAT', date: 25 },
    { 'day': 'SUN', date: 26 },
    { 'day': 'MON', date: 27 },
    { 'day': 'TUE', date: 28 },
    { 'day': 'WED', date: 29 },
    { 'day': 'THU', date: 30 },
    { 'day': 'FRI', date: 31 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
