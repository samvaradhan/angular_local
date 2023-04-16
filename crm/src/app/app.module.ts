import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SquarerootPipe } from './pipes/squareroot.pipe';
import { CurrencyConversionPipe, TextjoinPipe } from './pipes/currency-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquarerootPipe,
    CurrencyConversionPipe,
    TextjoinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
