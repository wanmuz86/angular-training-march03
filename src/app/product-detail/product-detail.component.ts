import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  // It's going to be a variable passed from the parent component
  @Input() name = '';

  // We create an EventEmitter that will notify parent when it is called
  // <string> refer to data type that is going to be passed to parent
  @Output() bought = new EventEmitter<string>();

  buyClicked(){
    // Notify parent, pass this.name as parameter
    // this.name = string
    this.bought.emit(this.name);
    console.log(`Buy has been pressed for ${this.name}`);
  }

}
