import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktails : Cocktail[] = [
    {
    name:"Mojito",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2020-08/articles-images-corps-texte-8.png?itok=tDVVevZ-',
    description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser.'

  },
  {
    name:"Blue Lagoon",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/blue-lagoon_0.jpg?itok=xac6xT0P',
    description:'C’est sa couleur qui le rend si populaire, et ce bleu, le Blue Lagoon le doit au curaçao !'

  },
  {
    name:"Aquavit Fresh",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/aquavit-fresh.jpg?itok=C17K5mqQ',
    description:'Venu tout droit de Norvège l’Aquavit est l’alcool le plus trendy du moment.'

  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
