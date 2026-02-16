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
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2020-08/articles-images-corps-texte-8.png?itok=tDVVevZ-',
    description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser.',
    tags: ['Fruité', 'Facile', '5 min']
  },
  {
    name:"Blue Lagoon",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/blue-lagoon_0.jpg?itok=xac6xT0P',
    description:'C’est sa couleur qui le rend si populaire, et ce bleu, le Blue Lagoon le doit au curaçao !',
    tags: ['Rafraîchissant', 'Facile', '3 min']
  },
  {
    name:"Aquavit Fresh",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/aquavit-fresh.jpg?itok=C17K5mqQ',
    description:'Venu tout droit de Norvège l’Aquavit est l’alcool le plus trendy du moment.',
    tags: ['Épicé', 'Moyen', '7 min']
  }
];
public selectedCocktail: Cocktail = this.cocktails[0];

constructor() { }
public selectCocktail(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
  }


  

}
