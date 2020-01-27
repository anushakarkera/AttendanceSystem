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
    { 'day': 'W', date: 1 },
    { 'day': 'Th', date: 2 },
    { 'day': 'F', date: 3 },
    { 'day': 'S', date: 4 },
    { 'day': 'Su', date: 5 },
    { 'day': 'M', date: 6 },
    { 'day': 'T', date: 7 },
    { 'day': 'W', date: 8 },
    { 'day': 'Th', date: 9 },
    { 'day': 'F', date: 10 },
    { 'day': 'S', date: 11 },
    { 'day': 'Su', date: 12 },
    { 'day': 'M', date: 13 },
    { 'day': 'T', date: 14 },
    { 'day': 'W', date: 15 },
    { 'day': 'Th', date: 16 },
    { 'day': 'F', date: 17 },
    { 'day': 'S', date: 18 },
    { 'day': 'Su', date: 19 },
    { 'day': 'M', date: 20 },
    { 'day': 'T', date: 21 },
    { 'day': 'W', date: 22 },
    { 'day': 'Th', date: 23 },
    { 'day': 'F', date: 24 },
    { 'day': 'S', date: 25 },
    { 'day': 'Su', date: 26 },
    { 'day': 'M', date: 27 },
    { 'day': 'T', date: 28 },
    { 'day': 'W', date: 29 },
    { 'day': 'TH', date: 30 },
    { 'day': 'F', date: 31 }
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
