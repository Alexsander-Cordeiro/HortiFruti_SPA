import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

// CRUD

// read
getAllProdutos(){
  return this.http.get('http://31.220.57.121:9080/produtos/')
}

// create
postProdutos(produto: Produto){
  return this.http.post('http://31.220.57.121:9080/produtos/',produto)
}

// update
putProdutos(produto: Produto){
  return this.http.put('http://31.220.57.121:9080/produtos/',produto)

}

getByIdProduto(id:number){
  return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)

}

// delete
deleteProdutos(id:number){
  return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)

}


}
