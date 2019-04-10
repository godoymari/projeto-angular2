import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroCondominosComponent } from './cadastro-condominos/cadastro-condominos.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { CadastroVisitantesComponent } from './cadastro-visitantes/cadastro-visitantes.component';
import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';
import { ListaCondominosComponent } from './lista-condominos/lista-condominos.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';
import { ListaVisitantesComponent } from './lista-visitantes/lista-visitantes.component';
import { AlmoxarifadoComponent } from './almoxarifado/almoxarifado.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'cadastroCondominos', component: CadastroCondominosComponent },
  { path: 'listaCondominos', component: ListaCondominosComponent },
  { path: 'cadastroFuncionarios', component: CadastroFuncionariosComponent },
  { path: 'listaFuncionarios', component: ListaFuncionariosComponent },
  { path: 'cadastroVisitantes', component: CadastroVisitantesComponent },
  { path: 'listaVisitantes', component: ListaVisitantesComponent },
  { path: 'formMensagem', component: FormMensagemComponent },
  //{ path: 'comprasAlmoxarifado', component: AlmoxarifadoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pathtemplateForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
