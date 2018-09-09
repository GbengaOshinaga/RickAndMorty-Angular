import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCharacters (): Observable<Character[]> {
    return this.http.get<any>(this.baseUrl)
      .pipe(
        map(characters => characters.results)
      )
  }
}
