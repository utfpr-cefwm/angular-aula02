import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:3001/api',
    }
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
