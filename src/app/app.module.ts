import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MythsComponent } from './myths/myths.component';
import { FormsModule } from '@angular/forms';
import { MythDetailComponent } from './myth-detail/myth-detail.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { MythSearchComponent } from './myth-search/myth-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MythsComponent,
    MythDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MythSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
