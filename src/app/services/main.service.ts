import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from '../models/Qualification';
import { Candidate } from '../models/Candidate';


const getQualificationsURL = 'http://127.0.0.1:3000/qualifications';
const postCandidateURL = 'http://127.0.0.1:3000/candidate';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

  public getQualifications(): Observable<Qualification[]> {
    return this.httpClient.get<Qualification[]>(getQualificationsURL);
  }

  public postCandidate(candidate: Candidate): Observable<any> {
    return this.httpClient.post(postCandidateURL, candidate, httpOptions);
  }
}
