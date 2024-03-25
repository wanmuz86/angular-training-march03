import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

// Imagine I get this from the internet
  welcome = 'Welcome to <strong>LazadaMall</strong>';
  number = 0;
  message = "";

  incrementClick(){
    this.message="";
    this.number++; // this, refer to the scope within the component
  }
  decrementClick(){
    if (this.number == 0){
      this.message = "Number cannot be less than 0";
    }else {
      this.number--;
    }
  }
  
  reset(){
    this.message="";
    this.number = 0;
  }

  selectProduct(productName:string){
    alert(`${productName} has been selected`);
  }

}
