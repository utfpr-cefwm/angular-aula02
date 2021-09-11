import { Disciplina } from './disciplina';
import { Turma } from './turma';

describe('Turma', () => {

  let turma: Turma;

  beforeEach(() => {
    turma = new Turma(
      new Disciplina(
        'WEB03',
        'Angular',
      ),
      2020,
      1,
      [
      ]
    );
  });

  it('should create an instance', () => {
    expect(turma).toBeTruthy();
  });

});
