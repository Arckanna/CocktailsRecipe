import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  title = 'cocktails';
  cocktail: Cocktail = {
    name:"Mojito",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2020-08/articles-images-corps-texte-8.png?itok=tDVVevZ-',
    description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser.'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
