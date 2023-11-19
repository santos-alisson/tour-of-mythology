import { Injectable } from '@angular/core';
import { Myth } from '../interfaces/myth.interface';
import { MYTHS } from '../../mock-myths';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MythService {

  constructor(
    private messageService: MessageService
  ) {}

  getMyths(): Observable<Myth[]> {
    const myths = of(MYTHS);
    this.messageService.add('MythService: fetched myths');
    return myths;
  }
  
  getMyth(id: number): Observable<Myth> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const myth = MYTHS.find(myth => myth.id === id)!;
    this.messageService.add(`MythService: fetched myth id=${id}`);
    return of(myth);
  }
  
  
}
