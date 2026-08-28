import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto.js';
import { MessagesService } from './messages.service.js';

@Controller('messages')
export class MessagesController {

    messagesService: MessagesService;

    constructor() {
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body)
        return this.messagesService.create(body.content);
    }

    @Get(':id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
