import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  
  // It's going to be a variable passed from the parent component
  @Input() name = '';

  // We create an EventEmitter that will notify parent when it is called
  // <string> refer to data type that is going to be passed to parent
  @Output() bought = new EventEmitter<string>();

  // The method being called when we create page
  // Before ngOnInit ... there is a risk that the variable is not there
  
  constructor(){
    console.log(`Variable passed is ${this.name} called from constructor`);
  }

  buyClicked(){
    // Notify parent, pass this.name as parameter
    // this.name = string
    this.bought.emit(this.name);
    console.log(`Buy has been pressed for ${this.name}`);
  }

  // It is safer to do the initializatin, eg API call inside onInit 
  // Instead of constructor
  ngOnInit(): void {
    console.log(`Variable passed here is ${this.name} called from ngOnInit`);
  }
}
