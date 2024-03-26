import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
// we use the method sort in JS 
// to sort the array alphabetically
  transform(value: string[]): string[] {
    if (value){
      return value.sort((a:string,b:string)=>{
        if (a < b ){
          return -1;
        } else if (b < a){
          return 1
        }
        return 0
      })
    }
    return [];

  }

}
