import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { Turma } from '../models/turma';
import { Turma as ITurma } from '../interfaces/turma';
import { TurmaDetalhes as ITurmaDetalhes } from '../interfaces/turma';
import { TurmaService } from './turma.service';
import { delay } from 'rxjs/operators';

const turmasFake: ITurmaDetalhes[] = [
  {
    _id: 'fafafafafafa',
    disciplina: {
      codigo: 'WEB01',
      nome: 'Fundamentos',
    },
    ano: 2020,
    periodo: 4,
    alunos: [
      {
        codigo: 1111,
        nome: 'Francisco de Oliveira',
      },
    ],
  },
];

describe('TurmaService', () => {

  let service: TurmaService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'BASE_URL',
          useValue: 'http://example.com/api',
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj(
            'HttpClient',
            [
              'get',
            ],
          ),
        },
      ],
    });
    service = TestBed.inject(TurmaService);
    httpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {

    it('deve retornar models a partir da resposta HTTP', (doneFn: DoneFn) => {
      httpClient.get.and.returnValue(of(turmasFake.map<ITurma>(tF => ({
        _id: tF._id,
        ano: tF.ano,
        periodo: tF.periodo,
        disciplina_codigo: tF.disciplina.codigo,
        alunos_total: tF.alunos.length,
      }))).pipe(delay(10)));
      service.get().subscribe((turmas: Turma[]) => {
        expect(turmas).toHaveSize(1);
        expect(turmas[0]).toBeInstanceOf(Turma);
        expect(turmas[0].quantidadeAlunos).toBe(1);
        doneFn();
      });
    });

  });

});
