import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {routingComponents} from './app-routing.module'

import {RankingService} from './service/ranking.service'
import { DialogeFeedbackComponent } from './dialoge-feedback/dialoge-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DialogeFeedbackComponent
  ],
  entryComponents:[DialogeFeedbackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,




  ],
  providers: [RankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
