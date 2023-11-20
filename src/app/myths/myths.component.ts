import { Component, OnInit } from '@angular/core';
import { Myth } from '../shared/interfaces/myth.interface';
import { MythService } from '../shared/services/myth.service';
import { MessageService } from '../shared/services/message.service';


@Component({
  selector: 'app-myths',
  templateUrl: './myths.component.html',
  styleUrl: './myths.component.css'
})
export class MythsComponent implements OnInit{
  myths : Myth[] = [];

  constructor(
    private mythService: MythService,
  ) {}

  ngOnInit(): void {
    this.getMyths();
  }

  getMyths(): void {
    this.mythService.getMyths()
        .subscribe(myths => this.myths = myths);
  }

  add(name: string): void {
    name = name?.trim();
    if (!name) {
      return; 
    }
    this.mythService.addMyth({ name } as Myth)
      .subscribe(myth => {
        this.myths.push(myth);
      });
  }

  delete(myth: Myth): void {
    this.myths = this.myths.filter(mythFilter => mythFilter !== myth);
    this.mythService.deleteMyth(myth.id).subscribe(mythFilter => {
      mythFilter !== myth
    });
  }
}
