import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats, NativeDateAdapter} from '@angular/material/core';

export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'yyyy-MM-dd',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-formclient',
  templateUrl: './formclient.component.html',
  styleUrls: ['./formclient.component.sass'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ]
})
export class FormclientComponent {
  constructor() { }

  date : any;

  ngOnInit() {
  }
}
