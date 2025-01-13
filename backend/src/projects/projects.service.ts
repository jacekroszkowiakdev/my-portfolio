import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './projects.entity/projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}
  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOne({ where: { id } });
  }

  create(project: Partial<ProjectEntity>) {
    return this.projectRepository.save(project);
  }

  update(id: number, project: Partial<ProjectEntity>) {
    return this.projectRepository.update(id, project);
  }

  delete(id: number) {
    return this.projectRepository.delete(id);
  }
}
