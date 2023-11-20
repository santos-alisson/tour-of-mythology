import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MythService } from '../shared/services/myth.service';
import { Myth } from '../shared/interfaces/myth.interface';

@Component({
  selector: 'app-myth-search',
  templateUrl: './myth-search.component.html',
  styleUrl: './myth-search.component.css'
})
export class MythSearchComponent implements OnInit{
  myths$: Observable<Myth[]>;
  private searchTerms$ = new Subject<string>();

  constructor(
    private mythService: MythService
  ) {}

  ngOnInit(): void {
    this.myths$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((search: string) => this.mythService.searchMyths(search)),
    );
  }

  search(term: string): void {
    this.searchTerms$.next(term);
  }

}
