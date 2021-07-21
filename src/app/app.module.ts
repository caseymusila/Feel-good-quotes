import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { TimePastPipe } from './time-past.pipe';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { }

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    TimePastPipe,
    QuoteformComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
