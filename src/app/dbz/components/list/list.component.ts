import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  @Input()
  public charactersList: Character [] = [{
    name: 'Trunks',
    power: 10
  }]

  onDeletecharacter(index: number):void {
    // TODO: emitir el Id  del personaje
    console.log({index});

  }
}
