import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutEntity } from './about.entity/about.entity';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';

@Module({
  imports: [TypeOrmModule.forFeature([AboutEntity])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
