import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      items: [
        {
            "id":1,
            "task":"Routine",
            "description":"Its a Routine task",
            "status":true
            },
            {
                "id":2,
                "task":"Test",
                "description":"Its a test task",
                "status":false
            },
            {
                "id":3,
                "task":"Activate Method",
                "description":"Its a Activate Method task",
                "status":false
            },
            {
                "id":4,
                "task":"Bug fixes",
                "description":"Work on application bugs and commit new code",
                "status":false
            },
            {
                "id":5,
                "task":"Lunch",
                "description":"Its a Lunch break",
                "status":false
            },
            {
                "id":6,
                "task":"Gym",
                "description":"Its Gym time",
                "status":false
            }
      ]
    };
  }
}