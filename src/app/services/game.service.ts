import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable()
export class GameService {
  game: Game;

  constructor() {
    this.game = new Game(false, false, true, 250, 100, 50, 2, 100);
  }

  getGame(): Game {
    return this.game;
  }

  goFull() {
    this.game.full = true;
    this.game.publicity = false;
  }

  publicityOff() {
    this.game.publicity = false;
  }

  goFreemium() {
    this.game.freemium = true;
  }

  reset() {
    this.game = new Game(false, false, true, 250, 100, 50, 2, 100);
  }

}
