import {Message} from "discord.js";
import {GanyuFinder} from "./ganyu-finder";
import {inject, injectable} from  "inversify";
import {TYPES} from "../types";

@injectable()
export class MessageResponder {
    private ganyuFinder: GanyuFinder;
    constructor(
        @inject(TYPES.GanyuFinder) ganyuFinder: GanyuFinder
    ) {
        this.ganyuFinder = ganyuFinder;
    }
    handle(message: Message): Promise<Message | Message[]> {
        if (this.ganyuFinder.isGanyu(message.content)) {
            return message.reply("Cocogoat");
        }
        return Promise.reject();
    }
}