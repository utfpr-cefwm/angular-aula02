import { Component, OnInit } from '@angular/core';

import { Turma } from 'src/app/models/turma';
import { Disciplina } from 'src/app/models/disciplina';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css'],
})
export class ListaTurmasComponent implements OnInit {

  public turmas: Turma[] = [
    new Turma(
      new Disciplina(
        'WEB01',
        'Fundamentos do Desenvolvimento Web',
      ),
      2021,
      1,
      [
      ],
    ),
    new Turma(
      new Disciplina(
        'WEB02',
        'Introdução aos Frameworks',
      ),
      2021,
      2,
      [
      ],
    ),
  ];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
