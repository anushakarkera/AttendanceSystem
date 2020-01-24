import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import * as _moment from 'moment';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMMM',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-dateselector',
  templateUrl: './dateselector.component.html',
  styleUrls: ['./dateselector.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
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

  startDate = _moment();

  constructor() { }

  ngOnInit() {
  }

  scrollInto() {
    // aiming to do this document.getElementById("31").scrollIntoView({block: "nearest",behavior: "smooth", inline: "start"})
    document.getElementById("31").scrollIntoView({'block': 'nearest', 'behavior': 'smooth'});
  }

}
