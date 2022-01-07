import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'FizzBuzz';
  fbg = '';

  constructor() { }

  ngOnInit(): void {
    this.fbg=this.FizzBuzzGameArray([3, 5], ['Fizz', 'Buzz']);
  }

  Mod(divisor: number, dividing: number){
    return divisor%dividing
  }

  FizzBuzz(number: number[], text: string[], count: number):string {
    let result:string;
    result = '';
    for(let i=0; i< number.length;i++){
     result+= this.Mod(count,number[i]) ? '' : (result!='' ?  ' ':'') + text[i];
    }
    result = result.length>0 ? result: count.toString(); 
    return result;
  }

  FizzBuzzGameArray(number: number[], text: string[]): string{
    let result:string;
    result = '';
    for(let i = 1; i < 101;i++){
      result += this.FizzBuzz(number,text, i) + ', ' 
    }
    return result.substring(0, result.length - 2);
  }
  
}
