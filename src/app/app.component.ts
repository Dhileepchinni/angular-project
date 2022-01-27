import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from './model/user';
//import { PostCrudService } from './services/post-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(router: Router){
      router.navigate(['/home']);
  }
}
  /* num:number=0;
w:number=50;
h:number=50;
flag:boolean=false; */
/* 
 increase(){
   this.num++;
 }
 decrease(){
 this.num--;
}
ZoomIn(){
    this.w+=10;
    this.h+=10;
}
ZoomOut(){
  this.w-=10;
  this.h-=10;
}
toogle(){
   this.flag=!this.flag;
} */


