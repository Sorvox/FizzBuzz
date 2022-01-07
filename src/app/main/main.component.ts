import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { PlayBuzzGame } from '../class/BuzzGame'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  fbgOption2 = '';
  fbgOption1 = '';
  
  playBuzzGame = new PlayBuzzGame([3, 5], ['Fizz', 'Buzz']);  

  constructor(private AP:AppComponent) { }

  ngOnInit(): void {
    this.fbgOption1 = this.playBuzzGame.getResultFizzBuzzGames();
    this.fbgOption2 = this.AP.FizzBuzzGameArray([3, 5], ['Fizz', 'Buzz']);
  }

}
