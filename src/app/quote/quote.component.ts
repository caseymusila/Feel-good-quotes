import { Quotes } from './../quotes';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quotes(1, 'Knowledge is power.', `Albert Einstein`,0, 0,`Kyalo`, new Date(2021, 7, 21)),

  ];
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote: Quotes) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  highlight(index: number){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0) {
      const votes: number[] = [];
      this.quotes.forEach(quote => votes.push(quote.upvote));
      if (check === Math.max(...votes)) {
        return true;
      }
    }
    return 

  }

  constructor() { }

  ngOnInit() {
  }

}
