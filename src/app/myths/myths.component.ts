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
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getMyths();
  }

  getMyths(): void {
    this.mythService.getMyths()
        .subscribe(myths => this.myths = myths);
  }
}
