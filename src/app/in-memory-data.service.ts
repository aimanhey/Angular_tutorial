import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Gatotkaca' },
      { id: 12, name: 'Srikandi' },
      { id: 13, name: 'Hanuman' },
      { id: 14, name: 'Laksamana' },
      { id: 15, name: 'Chandra' },
      { id: 16, name: 'Jaka' },
      { id: 17, name: 'Bagong' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}