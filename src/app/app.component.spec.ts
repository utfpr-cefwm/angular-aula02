import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { Disciplina } from './models/disciplina';
import { Turma, TurmaDetalhes } from './models/turma';
import { TurmaService } from './services/turma.service';

@Component({
  selector: 'app-turma',
  template: `
  `,
  styles: [`
  `],
})
export class TurmaComponentMock {
  @Input()
  public turma!: TurmaDetalhes;
}

@Component({
  selector: 'app-lista-turmas',
  template: `
  `,
  styles: [`
  `],
})
export class ListaTurmasComponentMock {
  @Output()
  public turmaSelecionada: EventEmitter<Turma> = new EventEmitter();
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let turmaService: jasmine.SpyObj<TurmaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        ListaTurmasComponentMock,
        TurmaComponentMock,
      ],
      providers: [
        {
          provide: TurmaService,
          useValue: jasmine.createSpyObj(
            'TurmaService',
            [
              'getDetalhes',
            ],
          ),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    turmaService = TestBed.inject(TurmaService) as jasmine.SpyObj<TurmaService>;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('não deve existir turma selecionada sem que haja um evento', () => {
    expect(app.turma).not.toBeDefined();
  });

  it('deve marcar uma nova turma selecionada para exibição', () => {
    fixture.detectChanges();
    const listaTurmas: ListaTurmasComponentMock = fixture.debugElement.query(
      By.directive(ListaTurmasComponentMock)
    ).componentInstance;
    turmaService.getDetalhes.and.returnValue(of(new TurmaDetalhes(
      'fafafafa',
      2020,
      2,
      new Disciplina('WEB11', 'Git'),
      [
      ],
    )));
    listaTurmas.turmaSelecionada.emit(new Turma(
      'fafafafa',
      2020,
      2,
      'WEB11',
      0,
    ));

    fixture.detectChanges();

    expect(app.turma).toBeDefined();
  });

  it('deve renderizar a turma selecionada, quando houver uma', () => {
    app.turma = new TurmaDetalhes(
      'fafafafafafafa',
      2020,
      2,
      new Disciplina(
        'WEB11',
        'Git',
      ),
      [
      ],
    );
    fixture.detectChanges();
    const turmaComp: TurmaComponentMock = fixture.debugElement.query(
      By.directive(TurmaComponentMock),
    ).componentInstance;
    expect(turmaComp.turma).toBe(app.turma);
  });

  it('deve renderizar a mensagem padrão, quando não houver turma', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(
      By.css('main')
    ).nativeElement.textContent).toContain(
      'Selecione uma turma para exibir os detalhes',
    );
  });

});
