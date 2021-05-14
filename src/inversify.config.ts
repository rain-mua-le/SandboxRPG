import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {Client} from "discord.js";
import {MessageResponder} from "./services/message-responder";
import {GanyuFinder} from "./services/ganyu-finder";
import {Command} from "./services/commands"

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<GanyuFinder>(TYPES.GanyuFinder).to(GanyuFinder).inSingletonScope();
container.bind<Command>(TYPES.Command).to(Command).inSingletonScope();

export default container;