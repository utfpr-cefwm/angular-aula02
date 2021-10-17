import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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
  public turma$: Subject<Turma> = new Subject();

  public turmaDetalhes$: Observable<TurmaDetalhes>;

  constructor(
    private turmaService: TurmaService,
  ) {
    this.turmaDetalhes$ = this.turma$.pipe(
      map((turma: Turma) => turma._id),
      switchMap((id: string) => this.turmaService.getDetalhes(id)),
    );
  }

  public exibeTurma(turma: Turma) {
    this.turma$.next(turma);
  }

}
