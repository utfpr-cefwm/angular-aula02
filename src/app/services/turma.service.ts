import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Aluno } from '../models/aluno';
import { Disciplina } from '../models/disciplina';
import { Turma, TurmaDetalhes } from '../models/turma';
import { Turma as ITurma } from '../interfaces/turma';
import { TurmaDetalhes as ITurmaDetalhes } from '../interfaces/turma';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public get(): Observable<Turma[]> {
    return this.httpClient.get<ITurma[]>(`${this.baseUrl}/turmas`).pipe(
      map(turmasRaw => turmasRaw.map(turmaRaw => {
        return new Turma(
          turmaRaw._id,
          turmaRaw.ano,
          turmaRaw.periodo,
          turmaRaw.disciplina_codigo,
          turmaRaw.alunos_total,
        );
      })),
    );
  }

  public getDetalhes(_id: string): Observable<TurmaDetalhes> {
    return this.httpClient.get<ITurmaDetalhes>(`${this.baseUrl}/turmas/${_id}`).pipe(
      map(turmaRaw => new TurmaDetalhes(
        turmaRaw._id,
        turmaRaw.ano,
        turmaRaw.periodo,
        new Disciplina(
          turmaRaw.disciplina.codigo,
          turmaRaw.disciplina.nome,
        ),
        turmaRaw.alunos.map(alunoRaw => new Aluno(
          alunoRaw.codigo,
          alunoRaw.nome,
        )),
      )),
    );
  }

}
