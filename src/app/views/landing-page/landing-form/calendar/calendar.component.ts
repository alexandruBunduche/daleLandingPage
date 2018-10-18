import { Component, forwardRef, OnInit, ViewEncapsulation, Input, AfterContentChecked, ViewChild, ContentChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


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

  @ViewChild('calendarComponenet') calendarComponenet;
  isValid: boolean = true;
  public it: any;
  birthDate: Date;
  minValidDate: Date = new Date(Date.now());  //corresponds to the minimum date of birth, to be today of age
  private onChange: (value: string) => void;
  private txtElement: HTMLInputElement;
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

    console.dir(this.calendarComponenet);

    this.minValidDate.setFullYear(this.minValidDate.getFullYear() - 18);
   
  }

  ngAfterContentChecked(): void {

    this.calendarElement = document.getElementById('calendar');
    this.btnElement = <HTMLElement>this.calendarElement.children[0].children[1];
    this.txtElement = <HTMLInputElement>this.calendarElement.children[0].children[0];

    if (this.txtElement !== undefined ) {
      if (this.txtElement.style.borderBottomColor !== '') {
        Object.assign(this.defaultBorderColor, this.txtElement.style.borderBottomColor);
      }
      else {
        this.defaultBorderColor = '';
      }

      console.log('calendar ngAfterContentChecked' + this.defaultBorderColor);
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
    if (this.txtElement !== undefined)
      this.txtElement.value = obj;
    console.log('writeValue');
  }


  onSelect(date: Date): void {
    this.onChange(date.toLocaleDateString());
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
