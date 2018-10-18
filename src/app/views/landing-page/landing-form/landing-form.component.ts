import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Candidate } from '../../../models/Candidate';
import { MainService } from '../../../services/main.service';
import { Qualification } from '../../../models/Qualification';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  @ViewChild('successModalWindow') successModalWindow;
  @ViewChild('emailAlreadyPresentModalWindow') emailAlreadyPresentModalWindow;
  qualifications: Qualification[];
  formGroup: FormGroup;
  submited: boolean = false;
  qualificationSelection: string;

  //validation error message

  nameValErrMsg: string = 'necessario';
  surnameValErrMsg: string = 'necessario';
  emailValErrMsg: string = 'necessario';
  birthDateValErrMsg: string = 'necessario';
  qualificationValErrMsg: string = 'necessario';

  constructor(private formBuilder: FormBuilder,
    private mainService: MainService,
    private config: NgbModalConfig,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {

    console.log('landing-form : init()');
    this.formGroup = this.formBuilder.group({

      nameValidator: ['', Validators.required],
      surnameValidator: ['', Validators.required],
      emailValidator: ['',Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      birthDateValidator: ['', Validators.required],
      qualificationValidator: ['', Validators.required]
    });

    this.mainService.getQualifications().subscribe(qualifications => this.qualifications = qualifications);
  }

  get f() {
    return this.formGroup.controls;
  }


  btnclk() {
    this.submited = true;

    if (!this.formGroup.invalid) {
      console.log('valid value ', this.getCandidate());
      this.postCandidate(this.getCandidate());
    }
  }

  private getCandidate(): Candidate {

    return {
      Nome: this.formGroup.controls.nameValidator.value,
      Cognome: this.formGroup.controls.surnameValidator.value,
      Email: this.formGroup.controls.emailValidator.value,
      DataDiNascita: this.formGroup.controls.birthDateValidator.value,
      TitoloDiStudio: this.formGroup.controls.qualificationValidator.value
    };
  }


  private postCandidate(candidate: Candidate): void {
    this.mainService.postCandidate(candidate).subscribe(next => { }, error => this.catchPostError(error), () => { this.post(); console.log('ok success'); this.openModal(); this.clearFields(); });
  }

  private post(): void {

    console.log('successfullySubmited');
  }

  private clearFields() {

    this.formGroup.controls.nameValidator.setValue('');
    this.formGroup.controls.surnameValidator.setValue('');
    this.formGroup.controls.emailValidator.setValue('');
    this.formGroup.controls.birthDateValidator.setValue('');
    this.formGroup.controls.qualificationValidator.setValue('');

    this.submited = false;
    this.onEmailChange();
  }

  private openModal() {
    this.modalService.open(this.successModalWindow);
  }

  private catchPostError(error): void {

    console.log(error);
    switch (error.error.id) {
      case 0: {
        console.log('email already present ', error);
        this.formGroup.controls.emailValidator.setErrors({ notUnique: true });
        this.emailValErrMsg = 'nominativo già registrato';
        this.modalService.open(this.emailAlreadyPresentModalWindow);
      }
    }
  }

   onEmailChange(): void {
    try {

      if (this.formGroup.controls.emailValidator.errors.pattern) {
        this.emailValErrMsg = 'email non valida';
      }
      else if (this.formGroup.controls.emailValidator.errors.required) {
        this.emailValErrMsg = 'necessario';
      }
    } catch (Err) { }

  }
}

