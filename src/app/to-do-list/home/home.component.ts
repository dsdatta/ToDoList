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
  currentEditingItem = { "id": 0, "task": "", "description": "", "status": false };
  selectedDeleteItem = { "id": 0, "task": "", "description": "", "status": false };
  editMode = false;
  confirmDelete = false;

  constructor(private listsService: ListsService) { }

  ngOnInit(): void {//get ToDo-list from json data through service
    
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

  //method to change item status
  getRow(rowItem:ToDoList){
    this.selectedItem.id=rowItem.id;
    this.selectedItem.description=rowItem.description;
    this.selectedItem.task=rowItem.task; 
    if(rowItem.status==true){ //if checbox checked/unchecked, change the item status & update.
      this.selectedItem.status=true;
    }
    else{
      this.selectedItem.status=false;
    }
    this.listsService.editListItem(this.selectedItem).subscribe(response => console.log(response));
    //refresh
    this.loadData();
    
  }

  //clear fieldsS
clearNewListItem(){
  this.newListItem = { "id": 0,  "task": "", "description": "", "status": false};
}

//method to create new item
createListItem(){
  this.newListItem.id=this.listToDo.length+this.completedList.length+1;
  this.listsService.createListItem(this.newListItem).subscribe(response => console.log(response));
  //refresh
  this.loadData();
}

//assign selected edit item to property
toggleEditMode() {
  this.currentEditingItem.id = this.selectedItem.id;
  this.currentEditingItem.task=this.selectedItem.task;
  this.currentEditingItem.description=this.selectedItem.description;
  this.currentEditingItem.status=this.selectedItem.status;
  this.editMode = !this.editMode;
}

//method to update edit list item
saveListItem(){
  this.listsService.editListItem(this.currentEditingItem).subscribe(response => console.log(response));
  //refresh
  this.loadData();
}

//assign selected delete item
toggleDeleteConfirm(){
  this.confirmDelete=true;
}

//method to delete selected item
deleteListItem(){
  this.listsService.deleteListItem(this.selectedDeleteItem.id).subscribe(response => console.log(response));
  //refresh
  this.loadData();
}

}
