import { Component } from '@angular/core';
import { Myth } from '../shared/interfaces/myth.interface';
import { MYTHS } from '../mock-myths';

@Component({
  selector: 'app-myths',
  templateUrl: './myths.component.html',
  styleUrl: './myths.component.css'
})
export class MythsComponent {
  myths = MYTHS;
  selectedMyth?: Myth;

  onSelect(myth: Myth): void {
    this.selectedMyth = myth;
  }
}
