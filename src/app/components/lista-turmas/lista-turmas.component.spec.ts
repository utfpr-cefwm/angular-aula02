import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurmaService } from 'src/app/services/turma.service';

import { ListaTurmasComponent } from './lista-turmas.component';

describe('ListaTurmasComponent', () => {

  let component: ListaTurmasComponent;
  let fixture: ComponentFixture<ListaTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListaTurmasComponent,
      ],
      providers: [
        {
          provide: TurmaService,
          useValue: jasmine.createSpyObj(
            'TurmaService',
            [
              'get',
            ],
          ),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
