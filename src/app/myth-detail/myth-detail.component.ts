import { Component, Input, OnInit } from '@angular/core';
import { Myth } from '../shared/interfaces/myth.interface';
import { ActivatedRoute } from '@angular/router';
import { MythService } from '../shared/services/myth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myth-detail',
  templateUrl: './myth-detail.component.html',
  styleUrl: './myth-detail.component.css'
})
export class MythDetailComponent implements OnInit{

  @Input() myth?: Myth;

  constructor(
    private route: ActivatedRoute,
    private mythService: MythService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getMyth();
  }
  
  getMyth(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mythService.getMyth(id)
      .subscribe(myth => this.myth = myth);
  }

  goBack(): void {
    this.location.back();
  }
}
