import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StatusComponent} from "./status.component";
import {TableComponent} from "./table.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MessageService} from "./message.service";
import {ApiService} from "./service/apiservice";

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'table', component: TableComponent},
      {path: 'status', component: StatusComponent},
    ]),
  ],
  providers: [
    MessageService,
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
