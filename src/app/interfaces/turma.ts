import { Aluno } from "./aluno";

export interface TurmaBase {

  /**
   * Identificador único autogerado no banco de dados.
   */
  _id: string;

  /**
   * Ano de oferta da turma.
   */
  ano: number;

  /**
   * Período de oferta da turma.
   */
  periodo: number;

}

export interface Turma extends TurmaBase {

  /**
   * Código da disciplina associada à turma.
   */
  disciplina_codigo: string;

  /**
   * Quantidade de alunos matriculados.
   */
  alunos_total: number;

}

export interface TurmaDetalhes extends TurmaBase {

  /**
   * Disciplina associada à turma.
   */
  disciplina: {

    /**
     * Código mnemônico da disciplina.
     */
    codigo: string;

    /**
     * Nome legível da disciplina.
     */
    nome: string;

  };

  /**
   * Alunos inscritos na turma.
   */
  alunos: Aluno[];

}
