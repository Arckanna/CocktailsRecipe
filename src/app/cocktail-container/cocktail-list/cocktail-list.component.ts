import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  @Output() changeCocktail = new EventEmitter<Cocktail>();
  @Input() cocktails?: Cocktail[];
  @Input() selectedCocktail?: Cocktail;

  searchTerm = '';

  get filteredCocktails(): Cocktail[] {
    const list = this.cocktails ?? [];
    if (!this.searchTerm.trim()) return list;
    const term = this.searchTerm.toLowerCase();
    return list.filter(c => c.name.toLowerCase().includes(term));
  }

  onSelectionChange(event: { options: Array<{ value: Cocktail; selected: boolean }> }): void {
    const selected = event.options.find(opt => opt.selected);
    if (selected) {
      this.changeCocktail.emit(selected.value);
    }
  }
}
