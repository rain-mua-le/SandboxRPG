import {injectable} from "inversify";
import {Usable} from "./usables"

@injectable()
export class Skill {
    public manaCost: number;
    public constructor(m: number) {
        this.manaCost = m;
    }
}