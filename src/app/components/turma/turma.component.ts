import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TurmaDetalhes } from 'src/app/models/turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css'],
})
export class TurmaComponent implements OnInit {

  @Input()
  public turma!: TurmaDetalhes;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
