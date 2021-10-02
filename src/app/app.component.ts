import { Component } from '@angular/core';

import { Turma, TurmaDetalhes } from './models/turma';
import { TurmaService } from './services/turma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /**
   * Turma para ser renderizada no template, se existir.
   */
  public turma?: TurmaDetalhes;

  constructor(
    private turmaService: TurmaService,
  ) {
  }

  public exibeTurma(turma: Turma) {
    this.turmaService.getDetalhes(turma._id).subscribe(
      (t: TurmaDetalhes) => this.turma = t
    );
  }

}
