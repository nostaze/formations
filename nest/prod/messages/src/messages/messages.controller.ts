import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto.js';
import { MessagesService } from './messages.service.js';

@Controller('messages')
export class MessagesController {
    constructor(public msgSrvc : MessagesService) {}

    @Get()
    listMessages() {
        return this.msgSrvc.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body)
        return this.msgSrvc.create(body.content);
    }

    @Get(':id')
    async getMessage(@Param('id') id: string) {
        const message = await this.msgSrvc.findOne(id);
        if (!message) {
            throw new NotFoundException('Message not found');
        }
        return message;
    }
}
