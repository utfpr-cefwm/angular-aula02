import { Disciplina } from './disciplina';
import { Turma } from './turma';

describe('Turma', () => {

  let turma: Turma;

  beforeEach(() => {
    turma = new Turma(
      'fafafafaf',
      2020,
      1,
      'WEB03',
      0,
    );
  });

  it('should create an instance', () => {
    expect(turma).toBeTruthy();
  });

});
