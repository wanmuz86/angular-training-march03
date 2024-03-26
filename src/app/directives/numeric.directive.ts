import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]',
  standalone: true
})
export class NumericDirective {

  // I declare the class that later will be binded to my Element
  @HostBinding('class') currentClass = '';

  constructor() { }

  // I will listen to the onKeyPressEvent from my element (input)
  @HostListener('keypress', ['$event']) onKeyPress(event:KeyboardEvent){
    // Get the character ASCII type in keyboard 
    const charCode = event.key.charCodeAt(0);
    console.log(charCode);
// If user type symbol or character [Refer to ascii code chart]
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      // Set the element class to 'invalid'
      this.currentClass = 'invalid';
      // Prevent user to type further
      event.preventDefault();
    }
    else [
      this.currentClass = 'valid'
    ]
  }

}
