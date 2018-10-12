import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from '../models/Qualification';
import { Candidate } from '../models/Candidate';


const getQualificationsURL = 'http://192.168.7.175:3000/qualifications';
const postCandidateURL = 'http://192.168.7.175:3000/candidate';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response'
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

  public postCandidate(candidate: Candidate): Observable<HttpResponse<Object[]>> {
    return this.httpClient.post(postCandidateURL, candidate, httpOptions);
  }
}
