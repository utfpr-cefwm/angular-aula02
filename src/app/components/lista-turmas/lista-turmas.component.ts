import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Turma } from 'src/app/models/turma';
import { Disciplina } from 'src/app/models/disciplina';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css'],
})
export class ListaTurmasComponent implements OnInit {

  @Output()
  public turmaSelecionada: EventEmitter<Turma> = new EventEmitter();

  public turmas: Turma[] = [
    new Turma(
      new Disciplina(
        'WEB01',
        'Fundamentos do Desenvolvimento Web',
      ),
      2021,
      1,
      [
        new Aluno(1234, 'João da Silva'),
        new Aluno(1235, 'Maria Joana Pereira'),
        new Aluno(1231, 'Oswaldo Siqueira'),
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
        new Aluno(4567, 'Antonio Jose da Silva'),
        new Aluno(4563, 'Jose Abreu'),
        new Aluno(4565, 'Katarina Couves'),
      ],
    ),
  ];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  public selecionaTurma(turma: Turma) {
    this.turmaSelecionada.emit(turma);
  }

}
