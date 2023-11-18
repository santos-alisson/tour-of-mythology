import { Component, Input } from '@angular/core';
import { Myth } from '../shared/interfaces/myth.interface';

@Component({
  selector: 'app-myth-detail',
  templateUrl: './myth-detail.component.html',
  styleUrl: './myth-detail.component.css'
})
export class MythDetailComponent {
  @Input() myth?: Myth;
}
