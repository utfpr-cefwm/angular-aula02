import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Aluno } from '../models/aluno';
import { Disciplina } from '../models/disciplina';
import { Turma } from '../models/turma';

const TURMAS = [
  {
    "_id": "fafafafafa",
    "disciplina": {
      "codigo": 'WEB01',
      "nome": 'Fundamentos do Desenvolvimento Web',
    },
    "ano": 2021,
    "periodo": 1,
    "alunos": [
      {
        "codigo": 1234,
        "nome": 'João da Silva',
      },
      {
        "codigo": 1235,
        "nome": 'Maria Joana Pereira',
      },
      {
        "codigo": 1231,
        "nome": 'Oswaldo Siqueira',
      },
    ],
  },
  {
    "_id": "fbfbfbfbfb",
    "disciplina": {
      "codigo": 'WEB02',
      "nome": 'Introdução aos Frameworks',
    },
    "ano": 2021,
    "periodo": 2,
    "alunos": [
      {
        "codigo": 4567,
        "nome": 'Antonio Jose da Silva',
      },
      {
        "codigo": 4563,
        "nome": 'Jose Abreu',
      },
      {
        "codigo": 4565,
        "nome": 'Katarina Couves',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  constructor(
  ) {
  }

  public get(): Observable<Turma[]> {
    return of(TURMAS).pipe(
      map(turmasRaw => turmasRaw.map(turmaRaw => {
        return new Turma(
          new Disciplina(
            turmaRaw.disciplina.codigo,
            turmaRaw.disciplina.nome,
          ),
          turmaRaw.ano,
          turmaRaw.periodo,
          turmaRaw.alunos.map(alunoRaw => new Aluno(
            alunoRaw.codigo,
            alunoRaw.nome,
          )),
        );
      })),
    );
  }

}
