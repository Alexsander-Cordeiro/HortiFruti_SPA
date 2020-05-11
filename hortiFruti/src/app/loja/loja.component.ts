import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Produto } from '../model/Produto'
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {


  listaProdutos: Produto[]

  produto: Produto = new Produto;

  constructor(private postagemService: PostagemService, private router: Router,private locationPage: Location) {}

  ngOnInit(){
    
  }


publicar(){
  this.postagemService.postProdutos(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp
     this.refresh();
  })
}

refresh(){
  this.router.navigateByUrl('/lista-produtos', {skipLocationChange:true}).then(()=>{
    this.router.navigate([this.locationPage.path()])
  })
}


}
