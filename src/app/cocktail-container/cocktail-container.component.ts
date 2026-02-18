import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent  {
  public cocktails: Cocktail[] = [
    {
    name: 'Mojito',
    img: 'assets/images/mojito.png',
    description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser.',
    tags: ['Fruité', 'Facile', '5 min'],
    ingredients: [
      { name: 'Rhum blanc', quantity: '5 cl' },
      { name: 'Citron vert', quantity: '1/2' },
      { name: 'Menthe fraîche', quantity: '8 feuilles' },
      { name: 'Sucre de canne', quantity: '2 cuillères à café' },
      { name: 'Eau gazeuse', quantity: '10 cl' },
      { name: 'Glaçons' }
    ]
  },
  {
    name:"Blue Lagoon",
    img:'assets/images/blueLagoon.png',
    description:'C’est sa couleur qui le rend si populaire, et ce bleu, le Blue Lagoon le doit au curaçao !',
    tags: ['Rafraîchissant', 'Facile', '3 min'],
    ingredients: [
      { name: 'Vodka', quantity: '4 cl' },
      { name: 'Curaçao bleu', quantity: '3 cl' },
      { name: 'Citron', quantity: '1/2' },
      { name: 'Sprite ou eau gazeuse', quantity: '10 cl' },
      { name: 'Glaçons' }
    ]
  },
  {
    name:"Aquavit Fresh",
    img:'assets/images/AquavitFresh.png',
    description:'Venu tout droit de Norvège l’Aquavit est l’alcool le plus trendy du moment.',
    tags: ['Épicé', 'Moyen', '7 min'],
    ingredients: [
      { name: 'Aquavit', quantity: '5 cl' },
      { name: 'Concombre', quantity: '3 tranches' },
      { name: 'Citron vert', quantity: '1/2' },
      { name: 'Menthe fraîche', quantity: 'quelques feuilles' },
      { name: 'Sirop de sucre', quantity: '1 cl' },
      { name: 'Glaçons' }
    ]
  }
];
public selectedCocktail: Cocktail = this.cocktails[0];

constructor() { }
public selectCocktail(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
  }


  

}
