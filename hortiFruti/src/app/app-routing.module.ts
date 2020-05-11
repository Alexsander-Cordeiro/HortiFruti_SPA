import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { PutProdutosComponent } from './put-produtos/put-produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "loja", component: LojaComponent},
  {path: "put-produtos/:id", component: PutProdutosComponent},
  {path: "lista-produtos", component: ListaProdutosComponent},
  {path: "delete-produto/:id", component: DeleteProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
