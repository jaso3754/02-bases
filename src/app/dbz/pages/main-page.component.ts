import { Component, EventEmitter, OnInit, output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {
  @output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000

  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];

    onNewCharacter( charater:string):void {
      console.log('Mainpage');
      console.log(Character);


    }

}
