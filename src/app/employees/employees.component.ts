import { Component, OnInit } from '@angular/core';
import { PostCrudService}  from '../services/post-crud.service'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public postCrud: PostCrudService) {
    this.postCrud.getPosts();
  }

  ngOnInit(): void {
  }

}
