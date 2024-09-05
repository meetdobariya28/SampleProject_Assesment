import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private baseURL = 'https://localhost:7278/api'; //Base URL from the Server Side
  constructor(private http: HttpClient) { }

  submitUser(userData: any): Observable<any> {   //Submit button
    return this.http.post(this.baseURL + '/User', userData);
  }
}
