import { MessagesRepository } from "./messages.repository.js";

export class MessagesService {
    messageRepository = new MessagesRepository();

    async findOne(id: string) {
        return this.messageRepository.findOne(id);
    }

    async findAll() {
        return this.messageRepository.findAll();
    }

    async create(content: string) {
        return this.messageRepository.create(content);
    }
}