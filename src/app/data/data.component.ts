import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
Name:string= "Ram"
Age:Number;
Email:string
Address;
Pname:Number
Tname;
Dname:string
Sname:string
Hobbies:string[]
projs=[]
  constructor() { }

  ngOnInit() {
    this.Name='John smith'
    this.Age= 30
    this.Email="johnsmith@gmail.com"
    this.Address={Hname:"horror house",street:"red",Place:"Bom",Pcode:658945}
    this.Hobbies=["playing","painting","swimming"]

this.projs=[{title:"proj 1",dept:"IT" ,status:"processing", period:2 },
{title:"proj 2", dept:"HR" ,status:"processing", period:2 },
{title:"proj 3", dept:"IT", status:"completed" ,period:2 },
{title:"proj 4", dept:"MR" ,status:"completed", period:2 },
{title:"proj 5" ,dept:"MR" ,status:"processing", period:2 }]
  }
  Add(){
    this.projs.push({title:this.Tname,dept:this.Dname,status:this.Sname,period:this.Pname})
  }

}


