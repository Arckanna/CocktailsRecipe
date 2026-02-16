import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();
  @Input() public cocktails?: Cocktail[];
  constructor() { }

  ngOnInit(): void {
  }

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }

}
