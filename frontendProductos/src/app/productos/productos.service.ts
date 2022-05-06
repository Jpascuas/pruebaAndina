import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Productos } from './productos';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL = 'http://localhost:8000/api/productos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getALL(): Observable<Productos[]> {
    return this.httpClient.get<Productos[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(producto): Observable<Productos> {
    return this.httpClient.post<Productos>(this.apiURL, JSON.stringify(producto), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  find(id): Observable<Productos> {
    return this.httpClient.get<Productos>(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(id, producto): Observable<Productos> {
    return this.httpClient.put<Productos>(this.apiURL + id, JSON.stringify(producto), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id) {
    return this.httpClient.delete<Productos>(this.apiURL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }
}
