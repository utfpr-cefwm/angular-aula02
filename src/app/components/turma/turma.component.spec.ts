import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Aluno } from 'src/app/models/aluno';
import { Disciplina } from 'src/app/models/disciplina';
import { Turma } from 'src/app/models/turma';

import { TurmaComponent } from './turma.component';

describe('TurmaComponent', () => {

  let component: TurmaComponent;
  let fixture: ComponentFixture<TurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TurmaComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaComponent);
    component = fixture.componentInstance;
    component.turma = new Turma(
      new Disciplina(
        'CODE_MOCK',
        'Disciplina Mock',
      ),
      2020,
      1,
      [
        new Aluno(
          123,
          'João Fonseca',
        ),
      ],
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Renderização', () => {

    it('deve exibir o nome da turma', () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.css('h1'),
      ).nativeElement;
      expect(el.textContent).toContain('CODE_MOCK');
    });

    it('deve exibir o nome da disciplina', () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.css('div b'),
      ).nativeElement;
      expect(el.textContent).toContain('Disciplina Mock');
    });

    it('deve exibir o código do aluno', () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.css('.aluno .codigo'),
      ).nativeElement;
      expect(el.textContent).toContain('123');
    });

    it('deve exibir o nome do aluno', () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.css('.aluno .nome'),
      ).nativeElement;
      expect(el.textContent).toContain('João Fonseca');
    });

  });

});
