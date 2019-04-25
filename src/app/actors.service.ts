import { Injectable } from '@angular/core';
import { actors } from './actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  // properties
  favorites = [];

  constructor() {}

  // methods

  toggleFavorite() {
    for (const actor of actors) {
      console.log(actor.id);
    }
    // return this.favorites.push();
  }

  isFavorite() {
    // if (actor == this.actor) {
    //  return true;
    // } else {
    //   return false;
    // }
  }
}
