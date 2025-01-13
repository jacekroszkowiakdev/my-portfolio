import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './projects.entity/projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  exports: [ProjectsService],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
