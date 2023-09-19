import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string) {
    return this.http.get<Country>(`${this.urlBase}/alpha/${code}`).pipe(
      catchError((error) => {
        console.log(error);
        return of(null);
      })
    );
  }

  searchCapital(term: string = '', defecto: string = 'capital') {
    return this.http.get<Country[]>(`${this.urlBase}/${defecto}/${term}`).pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  searchCountry(termo: string) {
    return this.searchCapital(termo, 'name');
  }

  searchRegion(termo: string) {
    return this.searchCapital(termo, 'region');
  }
}
