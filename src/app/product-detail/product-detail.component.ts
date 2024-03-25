import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnChanges{
  
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

  // The variable changes store the @Input inside our component
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name']; // Retrieve the input of value 'name'
    const oldValue = product.previousValue;
    const currentValue = product.currentValue;
    console.log(`Product change from ${oldValue} to ${currentValue}`);
  }
}
