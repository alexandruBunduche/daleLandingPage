import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidate } from '../../../models/Candidate';
import { MainService } from '../../../services/main.service';
import { Qualification } from '../../../models/Qualification';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  qualifications: Qualification[];
  formGroup: FormGroup;
  submited = false;
  qualificationSelection: string;

  constructor(private formBuilder: FormBuilder,
    private mainService: MainService
  ) {
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({

      nameValidator: ['', Validators.required],
      surnameValidator: ['', Validators.required],
      emailValidator: ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      birthDateValidator: ['', Validators.required],
      qualificationValidator: ['', Validators.required]
    });

    this.mainService.getQualifications().subscribe(qualifications => {this.qualifications = qualifications; console.log('qualifications' , this.qualifications)});

  }

  get f() {
    return this.formGroup.controls;
  }


  btnclk() {
    this.submited = true;

    if (!this.formGroup.invalid) {
      console.log('valid value ', this.getCandidate());
      this.mainService.postCandidate(this.getCandidate()).subscribe();
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
}

