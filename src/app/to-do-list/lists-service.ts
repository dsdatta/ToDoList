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
//private _urlList: string ="assets/lists.json";

constructor(private http: HttpClient) { }

//get list of all items
getListItems(): Observable<ToDoList[]> {
  return this.http.get<ToDoList[]>(this.listsUrl).pipe(
    retry(2),
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
  );
}

//To create new item
createListItem(item: ToDoList): Observable<ToDoList> {
  console.log(item);
  return this.http.post<ToDoList>(this.listsUrl, item).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
  )
}

//To edit selected item
editListItem(item: ToDoList): Observable<any> {
  return this.http.put(this.listsUrl + item.id, item);
}

//To delete selected item
deleteListItem(id: number): Observable<any> {
  return this.http.delete(this.listsUrl + id);
}

//To fetch an item based on its id
public getListItemById(id: number): Observable<any> {
  return this.http.get<ToDoList>(this.listsUrl + id); 
}

}