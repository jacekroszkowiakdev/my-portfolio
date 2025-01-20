import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactEntity } from './contact.entity/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() contactData: Partial<ContactEntity>) {
    return this.contactService.create(contactData);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.contactService.delete(id);
  }
}
