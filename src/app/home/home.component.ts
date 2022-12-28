import { Component, OnInit } from '@angular/core';
import { ListsService } from '../service/lists-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listToDo=[];
  constructor(private listsService: ListsService) { }

  ngOnInit(): void {//get ToDo-list from json file through service
    this.listsService.getList().subscribe(list =>  {
      this.listToDo = list;
    });

  }

}
