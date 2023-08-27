import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TestComponent } from './components/test/test.component';
import { ProductComponent } from './components/product/product.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [AppComponent, TestComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    TableModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    CardModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
