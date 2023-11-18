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
  
  
}
