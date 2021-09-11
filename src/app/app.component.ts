import { Component } from '@angular/core';

import { Turma } from './models/turma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /**
   * Turma para ser renderizada no template, se existir.
   */
  public turma?: Turma;

  public exibeTurma(turma: Turma) {
    this.turma = turma;
  }

}
