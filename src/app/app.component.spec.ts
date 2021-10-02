import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { Disciplina } from './models/disciplina';
import { Turma } from './models/turma';

@Component({
  selector: 'app-turma',
  template: `
  `,
  styles: [`
  `],
})
export class TurmaComponentMock {
  @Input()
  public turma!: Turma;
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
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
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
    listaTurmas.turmaSelecionada.emit(new Turma(
      new Disciplina(
        'WEB11',
        'Git',
      ),
      2020,
      2,
      [
      ],
    ));

    fixture.detectChanges();

    expect(app.turma).toBeDefined();
  });

  it('deve renderizar a turma selecionada, quando houver uma', () => {
    app.turma = new Turma(
      new Disciplina(
        'WEB11',
        'Git',
      ),
      2020,
      2,
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
