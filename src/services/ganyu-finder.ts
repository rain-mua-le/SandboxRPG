import {injectable} from "inversify";

@injectable()
export class GanyuFinder {
    private regexp = "Ganyu";
    public isGanyu(str: string): boolean {
        return str.search(this.regexp) >= 0;
    }
}