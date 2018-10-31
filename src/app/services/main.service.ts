import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from '../models/Qualification';
import { Candidate } from '../models/Candidate';
import { Skill } from '../models/Skill';
import { TryCatchStmt } from '@angular/compiler';
import { FormBuilder } from '@angular/forms';


const getQualificationsURL = 'http://192.168.7.98:3000/qualifications';
const postCandidateURL = 'http://127.0.0.1:3000/candidate';
const getSkillsURL = 'http://127.0.0.1:3000/competenze';
var httpOptions = {headers: {}};

httpOptions.headers = { 'Content-Type':'application/json'};

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response'
};*/

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

  public getQualifications(): Observable<Qualification[]> {
    return this.httpClient.get<Qualification[]>(getQualificationsURL);
  }

  public getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(getSkillsURL);
  }

  public postCandidate(candidate: Candidate, curriculumVitaeFile: File): Observable<Object> {

    var formData = new FormData();
    formData.append('candidate', JSON.stringify(candidate));
    formData.append('curriculumVitae', curriculumVitaeFile);

    return this.httpClient.post(postCandidateURL, formData);
  }
}
