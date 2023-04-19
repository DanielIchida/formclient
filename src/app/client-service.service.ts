import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private apiUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  readProduct() : Observable<any>{
     return this.http.get<any>(this.apiUrl);
  }
}
