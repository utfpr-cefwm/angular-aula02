import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export abstract class TurmaBase {

  constructor(
    public readonly _id: string,
    public ano: number,
    public periodo: number,
  ) {
  }

  /**
   * Nome da turma, composto por `'DISCIPLINA-ANO/PERÍODO'`.
   */
  public abstract nome: string;

  /**
   * Quantidade de alunos matriculados.
   */
  public abstract quantidadeAlunos: number;

}

export class Turma extends TurmaBase {

  constructor(
    public readonly _id: string,
    public ano: number,
    public periodo: number,
    public disciplinaCodigo: string,
    public quantidadeAlunos: number,
  ) {
    super(
      _id,
      ano,
      periodo,
    );
  }

  public get nome(): string {
    return `${this.disciplinaCodigo}-${this.ano}/${this.periodo}`;
  }

}

export class TurmaDetalhes extends TurmaBase {

  constructor(
    public readonly _id: string,
    public ano: number,
    public periodo: number,
    public disciplina: Disciplina,
    public alunos: Aluno[],
  ) {
    super(
      _id,
      ano,
      periodo,
    );
  }

  public get nome(): string {
    return `${this.disciplina.codigo}-${this.ano}/${this.periodo}`;
  }

  public get quantidadeAlunos(): number {
    return this.alunos.length;
  }

}
