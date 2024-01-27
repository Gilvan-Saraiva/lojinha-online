import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './teste/componente/componente.component';
import { HeaderComponent } from './template/header/header.component';
import { RodapeComponent } from './template/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    HeaderComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
