import {Component, forwardRef, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {element} from 'protractor';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements OnInit, ControlValueAccessor {


  isValid: boolean;
  it: any;
  birthDate: Date;
  currentYear: Date = new Date(Date.now());
  private onChange: (value: string) => void;


  constructor() {
  }

  ngOnInit() {
    console.log(Date.now());

    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
      dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
      today: 'Oggi',
      clear: 'Pulisci'
    };
  }

  isTouchDevice(): boolean {
    return 'ontouchstart' in window;
  }

  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(fn: any): void {


  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  onSelect(date: Date): void {
    this.onChange(date.toLocaleDateString());
  }

  @Input() set isIValid(isValid: boolean) {
    this.isValid = isValid;
  }
}
