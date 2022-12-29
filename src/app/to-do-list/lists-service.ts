import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoList } from './to-do-list.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root'
  })
export class ListsService {

  private listsUrl = 'api/items/';
//url list json file
private _urlList: string ="assets/lists.json";

constructor(private http: HttpClient) { }

getListItems(): Observable<ToDoList[]> {
  return this.http.get<ToDoList[]>(this.listsUrl).pipe(
    retry(2),
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
  );
}

createListItem(item: ToDoList): Observable<ToDoList> {
  item.id = 0;
  return this.http.post<ToDoList>(this.listsUrl, item).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
  )
}

editListItem(item: ToDoList): Observable<any> {
  return this.http.put(this.listsUrl + item.id, item);
}

deleteListItem(id: number): Observable<any> {
  return this.http.delete(this.listsUrl + id);
}
public getListItemById(id: number): Observable<any> {
  return this.http.get<ToDoList>(this.listsUrl + id); 
}

}