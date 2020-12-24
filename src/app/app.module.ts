import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InvestirComponent } from './components/investir/investir.component';
import { ProjetsExistentComponent } from './components/projets-existent/projets-existent.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvestirComponent,
    ProjetsExistentComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
