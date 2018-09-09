import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';
import { Location } from './location';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getCharacters (): Observable<Character[]> {
    return this.http.get<any>(this.baseUrl)
      .pipe(
        map(characters => characters.results)
      )
  }

  getLocation (url: string): Observable<Location> {
    return this.http.get<Location>(url);
  }
}
