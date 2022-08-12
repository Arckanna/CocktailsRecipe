import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktails';
  cocktail: Cocktail = {
    name:"mojito",
    img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2020-08/articles-images-corps-texte-8.png?itok=tDVVevZ-',
    description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser.'

  }
}
