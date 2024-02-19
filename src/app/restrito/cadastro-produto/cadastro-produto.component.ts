import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router) { }

  cadastrar(): void {
    if (this.produto.id === 0) {
      this.gerarNovoIdAleatorio();
    }

    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = produto;
        alert("Cadastro Efetuado com sucesso. ID: " + produto.id);
        this._router.navigate(["restrito/lista"]);
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );
  }

  gerarNovoIdAleatorio(): void {
    let novoId: number;
    do {
      novoId = Math.floor(Math.random() * 1000) + 1; 
    } while (this.verificarExistenciaId(novoId)); 

    this.produto.id = novoId;
  }

  verificarExistenciaId(id: number): boolean {
   
    return false;
  }
}
