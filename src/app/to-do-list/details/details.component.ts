import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListsService } from '../lists-service';
import { ToDoList } from '../to-do-list.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id :any;
  //reftiers entity for datatable
selectedItem: ToDoList | undefined;
  constructor(private route: ActivatedRoute,private listsService: ListsService,private router: Router) { }

  ngOnInit(): void {

    //obtain item's id from url
    this.getIdFromUrl();
    this.listsService.getListItemById(parseInt(this.id)).subscribe(item =>{
      this.selectedItem=item;
      });
  }

  //extracts id from url
  getIdFromUrl(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id= params.get('id');      
    });
  }

  //returns back to home page
  redirectToList(){
  this.router.navigate(['/home']);
  }

}
