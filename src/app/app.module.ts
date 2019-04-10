import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCondominosComponent } from './cadastro-condominos/cadastro-condominos.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { CadastroVisitantesComponent } from './cadastro-visitantes/cadastro-visitantes.component';
import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';
import { ListaCondominosComponent } from './lista-condominos/lista-condominos.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';
import { ListaVisitantesComponent } from './lista-visitantes/lista-visitantes.component';
import { AlmoxarifadoComponent } from './almoxarifado/almoxarifado.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCondominosComponent,
    CadastroFuncionariosComponent,
    CadastroVisitantesComponent,
    FormMensagemComponent,
    ListaCondominosComponent,
    ListaFuncionariosComponent,
    ListaVisitantesComponent,
    AlmoxarifadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
