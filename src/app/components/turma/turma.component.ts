import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Turma } from 'src/app/models/turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css'],
})
export class TurmaComponent implements OnInit {

  @Input()
  public turma!: Turma;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
