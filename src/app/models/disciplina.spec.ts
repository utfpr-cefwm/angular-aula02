import { Disciplina } from './disciplina';

describe('Disciplina', () => {

  let disciplina: Disciplina;

  beforeEach(() => {
    disciplina = new Disciplina(
      'Angular',
    );
  });

  it('should create an instance', () => {
    expect(disciplina).toBeTruthy();
  });

});
