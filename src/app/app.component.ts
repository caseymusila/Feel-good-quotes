import { Quotes, } from './quotes'
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feel-Good-Quotes';

  quotes = [
    new Quotes(1, 'Knowledge is power.', `Albert Einstein`, 0,0, `wanje`, new Date(2021, 7, 21)),
  ]

}
