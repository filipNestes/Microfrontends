import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3100';

  constructor(private http: HttpClient) {}

  fetchData(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/data/${category}`);
  }

  deleteData(category: string, index: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/data/${category}/${index}`);
  }

  deleteAllData(category: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/data/${category}`);
  }
}
