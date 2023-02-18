import { Component, OnInit } from '@angular/core';
import { Employee } from './color';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(){}

inputValue:any="rithik"
name:string="edureka"
value= "edit"


employees: Employee[]=[
  {

  id:1,
  fname:"Rithik",
  lname:"Kuvvarapu",
  salary:50000,
  dob:"Tue sep 18 2001 09:30:30 PM GMT +05:30",
  email:"rithik@gmail.com"
},
{

  id:2,
  fname:"Rithik",
  lname:"Kuvvarapu",
  salary:50000,
  dob:"Tue Sep 18 2001 09:30:30 PM GMT +05:30",
  email:"rrrrr@gmail.com"
},
{

  id:3,
  fname:"Rithik",
  lname:"kuvvarapu",
  salary:50000,
  dob:"Tues sep 18,2001 09:30:30 PM GMT +05:30",
  email:"chocolate@gmail.com"
}

]

ngOnInit():void{

}


}
