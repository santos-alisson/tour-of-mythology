import { Injectable } from '@angular/core';
import { Myth } from '../interfaces/myth.interface';
import { MYTHS } from '../../mock-myths';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MythService {
  private mythsUrl = 'api/myths';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getMyths(): Observable<Myth[]> {
    this.log('MythService: fetched myths');
    return this.http.get<Myth[]>(this.mythsUrl).pipe(
      tap(() => this.log('fetched myths')),
      catchError(this.handleError<Myth[]>('getMyths', []))
    );

  }
  
  getMyth(id: number): Observable<Myth> {
    const url = `${this.mythsUrl}/${id}`;
    return this.http.get<Myth>(url).pipe(
      tap(_ => this.log(`fetched myth id=${id}`)),
      catchError(this.handleError<Myth>(`getMyth id=${id}`))
    );
  }

  addMyth(myth: Myth): Observable<Myth> {
    return this.http.post<Myth>(this.mythsUrl, myth, this.httpOptions).pipe(
      tap((newMyth: Myth) => this.log(`added myth w/ id=${newMyth.id}`)),
      catchError(this.handleError<Myth>('addMyth'))
    );
  }
  
  updateMyth(myth: Myth): Observable<any> {
    return this.http.put(this.mythsUrl, myth, this.httpOptions).pipe(
      tap(_ => this.log(`updated myth id=${myth.id}`)),
      catchError(this.handleError<any>('updateMyth'))
    );
  }

  searchMyths(search: string): Observable<Myth[]> {
    if (!search.trim()) {
      return of([]);
    }
    return this.http.get<Myth[]>(`${this.mythsUrl}/?name=${search}`).pipe(
      tap(myths => myths.length ?
         this.log(`found myths matching "${search}"`) :
         this.log(`no myths matching "${search}"`)),
      catchError(this.handleError<Myth[]>('searchMyths', []))
    );
  }

  deleteMyth(id: number): Observable<Myth> {
    const url = `${this.mythsUrl}/${id}`;
  
    return this.http.delete<Myth>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted myth id=${id}`)),
      catchError(this.handleError<Myth>('deleteMyth'))
    );
  }

  private log(message: string) {
    this.messageService.add(`MythService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
    
}
