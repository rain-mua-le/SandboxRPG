import {injectable} from "inversify";
import {Usable} from "./usables";

@injectable()
export class Item extends Usable {
    public readonly isWeapon: boolean;
    public readonly isArmour: boolean;
    public readonly isDisposable: boolean;
    public readonly cost: number;
    public constructor(n: string, descr: string, h: number, a: number, def: number, 
        m: number, damage: number, t: number, w: boolean, arm: boolean, disp: boolean, c: number) {
            super(n, descr, h, a, def, m, damage, t);
            this.isWeapon = w;
            this.isArmour = arm;
            this.isDisposable = disp;
            this.cost = c;
        }
}