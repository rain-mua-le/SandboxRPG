import {inject, injectable} from "inversify";
import {Item} from "./items";
import {Skill} from "./skills";
import {TYPES} from "../types";

@injectable()
export class PlayableCharacter {
    public name: string;
    public level: number;
    public experience: number;
    public health: number;
    public attack: number;
    public defense: number;
    public mana: number;
    public luck: number;
    public money: number;
    public weapon: Item;
    public armour: Item;
    public inventory: Item[];
    public skills: Skill[];
    public constructor(n: string, lev: number, exp: number, h: number, a: number, d: number, m: number,
        l: number, mon: number, @inject(TYPES.Item) w: Item, @inject(TYPES.Item) arm: Item) {
        this.name = n;
        this.level = lev;
        this.experience = exp;
        this.health = h;
        this.attack = a;
        this.defense = d;
        this.mana = m;
        this.luck = l;
        this.money = mon;
        this.weapon = w;
        this.armour = arm;
    }
    get crit(): number {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        num = num / 10.0 + 0.5;
        if (num > 1 || num < 0) return this.crit;
        return num;
    }
}