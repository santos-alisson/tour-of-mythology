import { Component } from '@angular/core';
import { Myth } from '../shared/interfaces/myth.interface';

@Component({
  selector: 'app-myths',
  templateUrl: './myths.component.html',
  styleUrl: './myths.component.css'
})
export class MythsComponent {
  myth: Myth = {
    id: 1,
    name: 'Werewolf'
  };
}
