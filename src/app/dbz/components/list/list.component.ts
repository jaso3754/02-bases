import { Component, Input, Output , EventEmitter} from '@angular/core';
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

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter ( index:number ):void {

    this.onDelete.emit( index );
  }

}
