import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './projects.entity/projects.entity';
import { CreateProjectDto } from './projects.dto/create-project.dto/create-project.dto';
import { UpdateProjectDto } from './projects.dto/update-project.dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOne({ where: { id } });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id, updateProjectDto);
  }

  delete(id: number) {
    return this.projectRepository.delete(id);
  }
}
