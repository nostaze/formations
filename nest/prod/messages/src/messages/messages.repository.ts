import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        return Object.values(messages);
    }

    async create(content: string) {
        const contents = await readFile("messages.json", "utf-8");
        console.log(contents);
        const messages = JSON.parse(contents);
        const id = String(Math.floor(Math.random() * 1000));
        const message = { id, content };
        messages[id] = message;
        await writeFile("messages.json", JSON.stringify(messages, null, 2));
        return message;
    }
}