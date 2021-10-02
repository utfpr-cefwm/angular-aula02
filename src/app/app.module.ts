import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTurmasComponent } from './components/lista-turmas/lista-turmas.component';
import { TurmaComponent } from './components/turma/turma.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTurmasComponent,
    TurmaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
