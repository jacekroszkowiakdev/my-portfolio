import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from './contact.entity/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  create(contactData: Partial<ContactEntity>) {
    return this.contactRepository.save(contactData);
  }

  findAll() {
    return this.contactRepository.find({ order: { createdAt: 'DESC' } });
  }

  delete(id: number) {
    return this.contactRepository.delete(id);
  }
}
