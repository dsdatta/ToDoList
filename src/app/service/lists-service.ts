import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs/index';
import { catchError, find, map, mapTo } from 'rxjs/operators'; 

@Injectable()
export class ListsService {

//url list json file
private _urlList: string ="assets/lists.json";

constructor(private http: HttpClient) { }

//get total list from json file
getList(): Observable<any> {
    return this.http.get<any>(this._urlList).pipe(map(res => res), catchError(this.errorHandler));
}

 //catch errors
 errorHandler(error: HttpErrorResponse){
    return throwError(error ? error : "Server Error");
}

}