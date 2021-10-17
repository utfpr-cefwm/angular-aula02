import { Component } from '@angular/core';

import {
  combineLatest,
  Observable,
  Subject,
} from 'rxjs';
import {
  distinctUntilChanged,
  map,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs/operators';

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

  /**
   * Emite `true` sempre que houver um carregamento de informação.
   */
  public carregando$: Observable<boolean>;

  /**
   * Indica o conteúdo principal a exibir.
   */
  public templateMain$: Observable<string>;

  constructor(
    private turmaService: TurmaService,
  ) {

    this.turmaDetalhes$ = this.turma$.pipe(
      distinctUntilChanged(),
      map((turma: Turma) => turma._id),
      switchMap((id: string) => this.turmaService.getDetalhes(id)),
      shareReplay(1),
    );

    this.carregando$ = combineLatest([
      this.turma$.pipe(
        startWith(undefined),
      ),
      this.turmaDetalhes$.pipe(
        startWith(undefined),
      ),
    ]).pipe(
      map(([
        turmaResumida,
        turmaDetalhes,
      ]) => {
        return turmaResumida?._id !== turmaDetalhes?._id;
      }),
    );

    this.templateMain$ = combineLatest([
      this.carregando$.pipe(
      ),
      this.turmaDetalhes$.pipe(
        startWith(undefined),
      ),
    ]).pipe(
      map(([
        carregando,
        turmaDetalhes,
      ]) => {
        if (carregando) {
          return 'carregando';
        }
        if (turmaDetalhes) {
          return 'turma';
        }
        return 'selecione';
      }),
    );

  }

  public exibeTurma(turma: Turma) {
    this.turma$.next(turma);
  }

}
