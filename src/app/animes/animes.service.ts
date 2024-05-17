import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Animes } from './animes';


@Injectable({
  providedIn: 'root'
})
export class AnimesService {

private apiUrl: string = environment.baseUrl + 'animes';

constructor(private http: HttpClient) { }

getAnimes(): Observable<Animes[]> {
  return this.http.get<Animes[]>(this.apiUrl);
}

}