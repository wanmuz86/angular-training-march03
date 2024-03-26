import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]',
  standalone: true
})
export class CopyrightDirective {
// Dependency Injection - Adding the module/library inside this file (more in detail later)
  constructor(el:ElementRef) {

    // Retriveing current Year
    const currentYear = new Date().getFullYear();
    // el of type ElementRef, refer to the the element who is calling this directive
    // in our case, el here refer <footer></footer>
    const targetEl: HTMLElement = el.nativeElement;
    // Inside footer, I add the CSS class copyright which is definded inside styles.css
    targetEl.classList.add('copyright');
    // I will add a text content as below, referring to the Year
    targetEl.textContent = `Copyright ${currentYear} All Right Reserved`; 
  }

}
