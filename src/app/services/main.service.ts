import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const getQualificationsURL = '';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

 public getQualifications(): Observable<string[]> {

    return this.httpClient.get<string[]>(getQualificationsURL);
  }
}
