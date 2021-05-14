import {injectable} from "inversify";

@injectable()
export class Usable {
    public readonly name: string;
    public readonly description: string;
    public readonly healthPts: number;
    public readonly attackPts: number;
    public readonly defensePts: number;
    public readonly manaPts: number;
    public readonly damagePts: number;
    public readonly tempPeriod: number;
    public constructor(n: string, descr: string, h: number, a: number, def: number, 
        m: number, damage: number, t: number) {
        this.name = n;
        this.description = descr;
        this.healthPts = h;
        this.attackPts = a;
        this.defensePts = def;
        this.manaPts = m;
        this.damagePts = damage;
        this.tempPeriod = t;
    }
}