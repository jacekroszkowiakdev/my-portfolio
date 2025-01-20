import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AboutEntity } from './about.entity/about.entity';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(AboutEntity)
    private readonly aboutRepository: Repository<AboutEntity>,
  ) {}

  findAll() {
    return this.aboutRepository.find();
  }

  create(aboutData: Partial<AboutEntity>) {
    return this.aboutRepository.save(aboutData);
  }

  update(id: number, aboutData: Partial<AboutEntity>) {
    return this.aboutRepository.update(id, aboutData);
  }

  delete(id: number) {
    return this.aboutRepository.delete(id);
  }
}
