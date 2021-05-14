import {injectable} from 'inversify';

@injectable()
export class Enemy {
    public name: string;
    public health: number;
    public level: number;
    public experience: number;
    public attack: number;
    public luck: number;
    public money: number;
    public constructor(n: string, h: number, lev: number, e: number, a: number, l: number, m: number) {
        this.name = n;
        this.health = h;
        this.level = lev;
        this.experience = e;
        this.attack = a;
        this.luck = l;
        this.money = m;
    }
}