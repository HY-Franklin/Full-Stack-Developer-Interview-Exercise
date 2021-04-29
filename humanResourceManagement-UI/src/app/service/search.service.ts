import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUrl: string = "http://localhost:8080/search";

  constructor(private http: HttpClient) {
  }

  // search data using Prams
  searchByType(type, value): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.searchUrl}?type=${type}&value=${value}`);
  }


}
