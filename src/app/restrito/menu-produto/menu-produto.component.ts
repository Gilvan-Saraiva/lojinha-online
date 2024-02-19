import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { ListaProdutoComponent } from '../lista-produto/lista-produto.component';
@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrl: './menu-produto.component.css'
})
export class MenuProdutoComponent {
  
  constructor( private _router: Router,private _loginService:LoginService){}  
  
  logout(){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }
}
