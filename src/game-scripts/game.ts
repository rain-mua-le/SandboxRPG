import {inject, injectable} from "inversify";
import {PlayableCharacter} from "./playable-character";
import {Enemy} from './enemy';
import { TYPES } from "../types";

@injectable()
export class Game {
    public players: PlayableCharacter[];
    public enemies: Enemy[];
    public constructor() {
        this.players = [];
        this.enemies = [];
    }
    public addPlayer(@inject(TYPES.PlayableCharacter) char: PlayableCharacter) {
        this.players.push(char);
    }
    public addEnemy(@inject(TYPES.Enemy) en: Enemy) {
        this.enemies.push(en);
    }
}