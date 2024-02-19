import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class PrincipalComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) { }
  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
  }
}
