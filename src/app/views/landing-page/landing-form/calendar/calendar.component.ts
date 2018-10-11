import { Component, forwardRef, OnInit, ViewEncapsulation, Input, AfterContentChecked } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputText } from 'primeng/primeng';
declare var $: any;

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
export class CalendarComponent implements OnInit, ControlValueAccessor, AfterContentChecked {

  isValid: boolean = true;
  public it: any;
  birthDate: Date;
  currentYear: Date = new Date(Date.now());
  private onChange: (value: string) => void;
  private txtElement: HTMLElement;
  private btnElement: HTMLElement;
  private defaultBorderColor: string;
  private calendarElement: HTMLElement;

  constructor() {
  }

  ngOnInit() {
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

  ngAfterContentChecked(): void {
    this.txtElement = <HTMLElement>document.getElementById('calendar').children[0].children[0];
    this.btnElement = <HTMLElement>document.getElementById('calendar').children[0].children[1];
    this.calendarElement = <HTMLElement>document.getElementById('calendar');

    if (this.txtElement !== undefined) {
      if (this.txtElement.style.borderBottomColor !== '') {
        Object.assign(this.defaultBorderColor, this.txtElement.style.borderBottomColor);
      }
      else {
        this.defaultBorderColor = '';
      }

      console.log('def is ' + this.defaultBorderColor);
    }
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
    this.onChange(date.toLocaleString());
  }


  @Input() set isIValid(isValid: boolean) {
    this.isValid = isValid;
    if (isValid) {
      this.setValidStile();

    }
    else {
      this.setInvalidStile();

    }

    console.log(isValid);
  }

  setInvalidStile(): void {

    if (this.txtElement !== undefined) {
      this.txtElement.style.borderBottomColor = 'red';
      this.txtElement.style.borderTopColor = 'red';
      this.txtElement.style.borderLeftColor = 'red';
    }

    if (this.btnElement !== undefined) {
      this.btnElement.style.borderBottomColor = 'red';
      this.btnElement.style.borderTopColor = 'red';
      this.btnElement.style.borderRightColor = 'red';
    }
  }

  setValidStile(): void {

    if (this.txtElement !== undefined) {
      this.txtElement.style.borderBottomColor = this.defaultBorderColor;
      this.txtElement.style.borderTopColor = this.defaultBorderColor;
      this.txtElement.style.borderLeftColor = this.defaultBorderColor;
    }

    if (this.btnElement !== undefined) {
      this.btnElement.style.borderBottomColor = this.defaultBorderColor;
      this.btnElement.style.borderTopColor = this.defaultBorderColor;
      this.btnElement.style.borderRightColor = this.defaultBorderColor;
    }
    console.log(this.defaultBorderColor);
  }
}
