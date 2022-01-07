export interface BuzzGame {
    text: string[];
    numbers: number[];
    getResultFizzBuzzGames(): string;
}

export class PlayBuzzGame implements BuzzGame{
    constructor(public text, public numbers) {}
    
    public getResultFizzBuzzGames() {
        return this.FizzBuzzGameArray(this.text, this.numbers)    
    }
    
    private Mod(divisor: number, dividing: number){
        return divisor%dividing;
    }
    
    private FizzBuzz(number: number[], text: string[], count: number): string {
        let result:string;
        result = '';
        for(let i=0; i< number.length;i++){
         result+= this.Mod(count,number[i]) ? '' : (result!='' ?  ' ':'') + text[i];
        }
        result = result.length>0 ? result: count.toString(); 
        return result;
      }
    
    private FizzBuzzGameArray(number: number[], text: string[]): string{
        let result:string;
        result = '';
        for(let i = 1; i < 101;i++){
          result += this.FizzBuzz(number,text, i) + ', ' 
        }
        return result.substring(0, result.length - 2);
    }
}

