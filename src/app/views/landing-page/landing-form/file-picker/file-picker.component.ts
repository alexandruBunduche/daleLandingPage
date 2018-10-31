import { Component, OnInit, forwardRef, Output, EventEmitter} from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilePickerComponent),
      multi: true
    }
  ]
})
export class FilePickerComponent implements OnInit, ControlValueAccessor {

  @Output() cVFileEventEmitter: EventEmitter<File> = new EventEmitter<File>();

  private curriculumVitaeFile: File;


  private onChange: (value: File) => void;

    writeValue(obj: any): void {
       // throw new Error("Method not implemented.");
  }

  registerOnChange(onChange: (value: File) => void): void {
      this.onChange = onChange;
  }

    registerOnTouched(fn: any): void {
       // throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
       // throw new Error("Method not implemented.");
    }

  onSelect(event: any): void {
    console.log('file selected');
    console.dir(event.target.files[0]);
    this.curriculumVitaeFile = event.target.files[0];
    this.cVFileEventEmitter.emit(event.target.files[0]);
  }

  constructor() { }

  ngOnInit() {
  }

}
