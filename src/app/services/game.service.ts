import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable()
export class GameService {
  game: Game;

  constructor() {
    this.game = new Game(false, 100, 50, 100);
  }

  getGame(): Game {
    return this.game;
  }

  goFull(){
    this.game.full=true;
  }

}
