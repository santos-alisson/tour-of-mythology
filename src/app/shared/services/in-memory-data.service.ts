import { Injectable } from '@angular/core';
import { Myth } from '../interfaces/myth.interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  
  createDb() {
    const myths = [
      { id: 12, name: 'Werewolf' },
      { id: 13, name: 'Vampire' },
      { id: 14, name: 'Ghoul' },
      { id: 15, name: 'Zombie' },
      { id: 16, name: 'Leprechaun' },
      { id: 17, name: 'Jinn' },
      { id: 18, name: 'Witch' },
      { id: 19, name: 'Tooth-fairy' },
      { id: 20, name: 'Cuca' }
    ];
    return {myths};
  }

  genId(myths: Myth[]): number {
    return myths.length > 0 ? Math.max(...myths.map(myth => myth.id)) + 1 : 11;
  }
}
