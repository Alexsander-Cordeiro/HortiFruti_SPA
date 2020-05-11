import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Produto } from '../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  
  produto: Produto = new Produto();
  delOk: boolean = false;

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  

  ngOnInit(): void {

    let id:number = this.route.snapshot.params['id']
    this.findById(id);

  }

  findById(id:number){
    this.postagemService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err =>{
      console.log(`Erro: ${err.status}, não conseguimos pegar o id `)
    })

  }

  btnSim(){
    this.postagemService.deleteProdutos(this.produto.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/loja'])
      localStorage.setItem("delOk", this.delOk.toString())
    })

  }

  btnNao(){
    this.router.navigate(['/loja'])
  }

}
