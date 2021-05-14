import {injectable} from "inversify";

@injectable()
export class Command {
    private regexp;
    public constructor(cmd: string) {
        this.regexp = "$" + cmd;
    }
    public isCommand(str: string): boolean {
        return str.search(this.regexp) >= 0;
    }
}