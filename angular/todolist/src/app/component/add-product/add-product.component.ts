import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
p:Product=new Product();

  constructor() { }

  ngOnInit() {
  }
onSave(){
  
}
}
