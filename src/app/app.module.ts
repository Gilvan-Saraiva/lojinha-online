import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*Importações Angular Material*/
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';

import { RestritoRoutingModule } from './restrito/restrito-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { MenuProdutoComponent } from './restrito/menu-produto/menu-produto.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
  AppComponent,
  PrincipalComponent,
  LoginComponent,
  RodapeComponent,
  RestritoComponent,
  AtualizaProdutoComponent,
  CadastroProdutoComponent,
  ListaProdutoComponent,
  MenuProdutoComponent,
  HeaderComponent,
  MenuComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  RestritoRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RestritoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }