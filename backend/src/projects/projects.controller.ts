import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectEntity } from './projects.entity/projects.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectsService.findOne(id);
  }

  @Post()
  create(@Body() project: Partial<ProjectEntity>) {
    return this.projectsService.create(project);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() project: Partial<ProjectEntity>) {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.projectsService.delete(id);
  }
}
