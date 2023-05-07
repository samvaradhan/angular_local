import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SquarerootPipe } from './pipes/squareroot.pipe';
import { CurrencyConversionPipe, TextjoinPipe } from './pipes/currency-conversion.pipe';
import { UserComponent } from './user/user.component';
import { User1Component } from './user1/user1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquarerootPipe,
    CurrencyConversionPipe,
    TextjoinPipe,
    UserComponent,
    User1Component
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
