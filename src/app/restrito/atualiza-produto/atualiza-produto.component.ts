import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
  }

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        this.produto = res; // Atualizar para receber diretamente o objeto do produto
      }
    );
  }

  atualizar(id: number): void {
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      () => {
        alert("Produto atualizado com sucesso!");
        this._router.navigate(["restrito/lista"]);
      },
      err => {
        alert("Erro ao atualizar o produto: " + err.message);
      }
    );
  }
}
