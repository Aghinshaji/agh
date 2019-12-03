import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products;
show:boolean=false;
pname:string;
  constructor() { }

  ngOnInit() {
    this.products=["printer","scaner","speaker"]
  }
Add(){
  this.products.push(this.pname)
}
del(i:Number){
  this.products.splice(i,1);
}
ShowTable(){
  this.show=!this.show
}
}
