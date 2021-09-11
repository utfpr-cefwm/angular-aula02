import { Aluno } from './aluno';

describe('Aluno', () => {

  let aluno: Aluno;

  beforeEach(() => {
    aluno = new Aluno(
      111,
      'João das Couves',
    );
  });

  it('should create an instance', () => {
    expect(aluno).toBeTruthy();
  });

});
