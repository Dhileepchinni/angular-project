import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  num1: number = 0;
  num2: number=0;
  num3: number = 0;
  num4: number=0;
  num5: number = 0;
  num6: number=0;
  num7: number = 0;
  num8: number=0;
  num9: number = 0;
  num10: number=0;
  color1: string;
  color2: string;
  value1: string;
  value2: string;
  color3: string;
  color4: string;
  value3: string;
  value4: string;
  color5: string;
  color6: string;
  value5: string;
  value6: string;
  color7: string;
  color8: string;
  value7: string;
  value8: string;
  value9: string;
  value10: string;
  color9: string;
  color10: string;
   v1: number=0;
   v2: number=0;
   v3: number=0;
   v4: number=0;
   v5: number=0;

 constructor() {
   this.color1="btn-danger"
   this.color2="btn-danger"
 this.value1=" "
 this.value2=" "
 this.value3=""
 this.value4=""
 this.value5=""
 this.value6=" "
 this.value7=""
 this.value8=""
 this.color3="btn-danger"
 this.value9=""
 this.color10="btn-danger"
 this.value10=""
 this.color9="btn-danger"
 this.color4="btn-danger"
   this.color5="btn-danger"
   this.color6="btn-danger"
   this.color7="btn-danger"
   this.color8="btn-danger"
  }
    increase1(){
      this.num1++;
      this.v1=1;
      this.setColor1();
      this.setValue2();
      this.setValue1();
    }
    decrease1(){
    this.num2++;
    this.v1=1;
    this.setValue2();
    this.setValue1();
    this.setColor2();
   }
   increase2(){
    this.num3++;
    this.v2=1;
    this.setColor3();
    this.setValue4();
    this.setValue3();
  }
  decrease2(){
  this.num4++;
  this.v2=1;
  this.setValue4();
  this.setValue3();
  this.setColor4();
 }
 increase3(){
  this.num5++;
  this.v3=1;
  this.setColor5();
  this.setValue6();
  this.setValue5();
}
decrease3(){
this.num6++;
this.v3=1;
this.setValue6();
this.setValue5();
this.setColor6();
}
increase4(){
  this.num7++;
  this.v4=1;
  this.setColor7();
  this.setValue8();
  this.setValue7();
}
decrease4(){
this.num8++;
this.v4=1;
this.setValue8();
this.setValue7();
this.setColor8();
}
increase5(){
  this.num9++;
  this.v5=1;
  this.setColor9();
  this.setValue10();
  this.setValue9();
}
decrease5(){
this.num10++;
this.v5=1;
this.setValue10();
this.setValue9();
this.setColor10();
}
   setColor1() {
    this.color1 = (this.num1 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setColor2() {
    this.color2 = (this.num2 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setValue1() {
    this.value1 = (this.v1 == 1) ? 'disabled' : ''
  } 
  setValue2() { 
    this.value2 = (this.v1 == 1) ? 'disabled' : ''
  }
  setColor3() {
    this.color3 = (this.num3 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setColor4() {
    this.color4 = (this.num4 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setValue3() {
    this.value3 = (this.v2 == 1) ? 'disabled' : ''
  }
  setValue4() {
    this.value4 = (this.v2 == 1) ? 'disabled' : ''
  }
  setColor5() {
    this.color5 = (this.num5 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setColor6() {
    this.color6 = (this.num6 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setValue5() {
    this.value5 = (this.v3 == 1) ? 'disabled' : ''
  }
  setValue6() {
    this.value6 = (this.v3 == 1) ? 'disabled' : ''
  }
  setColor7() {
    this.color7 = (this.num7 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setColor8() {
    this.color8 = (this.num8 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setValue7() {
    this.value7 = (this.v4 == 1) ? 'disabled' : ''
  }
  setValue8() {
    this.value8 = (this.v4 == 1) ? 'disabled' : ''
  }
  setColor9() {
    this.color9 = (this.num9 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setColor10() {
    this.color10 = (this.num10 > 0) ? 'btn-primary' : 'btn-danger'
  }
  setValue9() {
    this.value9 = (this.v5 == 1) ? 'disabled' : ''
  }
  setValue10() {
    this.value10 = (this.v5 == 1) ? 'disabled' : ''
  }
}
