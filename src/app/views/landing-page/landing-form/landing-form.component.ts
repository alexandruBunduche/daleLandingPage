import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidate } from '../../../models/Candidate';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  titoliStudio: any[];
  formGroup: FormGroup;
  submited = false;
  qualificationSelection: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({

      nameValidator: ['', Validators.required],
      surnameValidator: ['', Validators.required],
      emailValidator: ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      birthDateValidator: ['', Validators.required],
      qualificationValidator: ['', Validators.required]
    });

    this.titoliStudio = [
      {value: 'Licenza elementare', label: 'Licenza elementare'},
      {value: 'Licenza media', label: 'Licenza media'},
      {value: 'Titolo di istruzione secondaria superiore', label: 'Titolo di istruzione secondaria superiore'},
      {value: 'Diploma di istruzione secondaria superiore', label: 'Diploma di istruzione secondaria superiore'},
      {value: 'Diploma terziario extra-universitario', label: 'Diploma terziario extra-universitario'},
      {value: 'Diploma universitario', label: 'Diploma universitario'},
      {value: 'Laurea di I° livello', label: 'Laurea di I° livello'},
      {value: 'Diploma di laurea', label: 'Diploma di laurea'},
      {value: 'Laurea specialistica a ciclo unico', label: 'Laurea specialistica a ciclo unico'},
      {value: 'Laurea specialistica', label: 'Laurea specialistica'},
      {value: 'Master universitario di I° livello', label: 'Master universitario di I° livello'},
      {value: 'Master universitario di II° livello', label: 'Master universitario di II° livello'},
      {value: 'Diploma di specializzazione', label: 'Diploma di specializzazione'},
      {value: 'Titolo di dottore di ricerca', label: 'Titolo di dottore di ricerca'}
    ];
  }

  get f() {
    return this.formGroup.controls;
  }


  btnclk() {
    this.submited = true;

    if (!this.formGroup.invalid)
      console.log(this.getCandidate());
  }

  private getCandidate(): Candidate {

    return {
              name: this.formGroup.controls.nameValidator.value,
              surname: this.formGroup.controls.surnameValidator.value,
              email: this.formGroup.controls.emailValidator.value,
              birthDate: this.formGroup.controls.birthDateValidator.value,
              qualification: this.formGroup.controls.qualificationValidator.value
            }
  }
}

