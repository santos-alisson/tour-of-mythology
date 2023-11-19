import { Component, OnInit } from '@angular/core';
import { Myth } from '../shared/interfaces/myth.interface';
import { MythService } from '../shared/services/myth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  myths: Myth[] = [];

  constructor(private mythService: MythService) { }

  ngOnInit(): void {
    this.getMyths();
  }

  getMyths(): void {
    this.mythService.getMyths()
      .subscribe(myths => this.myths = myths.slice(0, 4));
  }
}