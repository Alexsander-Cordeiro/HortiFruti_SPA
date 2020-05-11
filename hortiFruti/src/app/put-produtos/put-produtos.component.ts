import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Produto } from '../model/Produto';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-produtos',
  templateUrl: './put-produtos.component.html',
  styleUrls: ['./put-produtos.component.css']
})
export class PutProdutosComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.findById(id)

  }

  // chamar O ID
findById(id:number){
  this.postagemService.getByIdProduto(id).subscribe((resp: Produto)=>{
    this.produto = resp
  })
}

salvar(){
  this.postagemService.putProdutos(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp
    this.router.navigate(['/loja'])
    location.assign('/loja')
  })
}

}
