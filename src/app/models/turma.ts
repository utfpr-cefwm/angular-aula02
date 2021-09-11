import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class Turma {

  constructor(
    public disciplina: Disciplina,
    public ano: number,
    public periodo: number,
    public alunos: Aluno[],
  ) {
  }

  /**
   * Nome da turma, composto por `'DISCIPLINA-ANO/PERÍODO'`.
   */
  public get nome(): string {
    return `${this.disciplina.codigo}-${this.ano}/${this.periodo}`;
  }

}
