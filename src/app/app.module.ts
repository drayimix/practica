import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TokyoComponent } from './components/tokyo/tokyo.component';
import { LondresComponent } from './components/londres/londres.component';
import { VeneciaComponent } from './components/venecia/venecia.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NewyorkComponent } from './components/newyork/newyork.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TokyoComponent,
    LondresComponent,
    VeneciaComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    FooterComponent,
    NewyorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
