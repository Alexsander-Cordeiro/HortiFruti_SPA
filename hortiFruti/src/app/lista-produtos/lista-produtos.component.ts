import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  key= 'data'
  reverse = true

  produto: Produto = new Produto();
  listaProdutos: Produto[];

  constructor(private postagemService: PostagemService) { }

  ngOnInit(){
    this.findAllProdutos()
   
  } 

  findAllProdutos(){
    this.postagemService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

}
