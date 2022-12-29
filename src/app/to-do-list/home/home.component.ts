import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists-service';
import { ToDoList } from '../to-do-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedItem = {
    id: 0,
    task:'',
    description:'',
    status:false
  }
  listToDo: any[] = [];
  completedList: any[] = [];
  selectedCheckboxes: any = [];
  newItemDialog = false;
  newListItem = { "id": 0, "task": "", "description": "", "status": false };
  constructor(private listsService: ListsService) { }

  ngOnInit(): void {//get ToDo-list from json file through service
    
    this.loadData();
  }

  //load data from service and backend
  loadData(){
    this.listsService.getListItems().subscribe(list =>  {
      var listData: any[] = [];
      listData=list;
      //main table
      this.listToDo = listData.filter(x=>x.status==false);
     //completed table
     this.completedList = listData.filter(x=>x.status==true);
    });

  }

  getRow(rowItem:ToDoList){
    this.selectedItem.id=rowItem.id;
    this.selectedItem.description=rowItem.description;
    this.selectedItem.task=rowItem.task; 
    if(rowItem.status==true){
      this.selectedItem.status=true;
    }
    else{
      this.selectedItem.status=false;
    }
    this.listsService.editListItem(this.selectedItem).subscribe(response => console.log(response));
    this.loadData();
    
  }

clearNewListItem(){
  this.newListItem = { "id": 0,  "task": "", "description": "", "status": false};
}

createListItem(){
  this.newListItem.id=this.listToDo.length+this.completedList.length+1;
  this.listsService.createListItem(this.newListItem).subscribe(response => console.log(response));
  this.loadData();
}

}
