import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResultItemComponent } from 'src/components/result-item/result-item.component';
import { ResultsComponent } from 'src/components/results/results.component';
import { SearchComponent } from 'src/components/search/search.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
