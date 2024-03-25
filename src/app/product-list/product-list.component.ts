import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

// Imagine I get this from the internet
  welcome = 'Welcome to <strong>LazadaMall</strong>';
  number = 0;

  incrementClick(){
    this.number++; // this, refer to the scope within the component
  }
  decrementClick(){
    this.number--;
  }
  
  reset(){
    this.number = 0;
  }

}
