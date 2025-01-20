import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutEntity } from './about.entity/about.entity';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @Post()
  create(@Body() aboutData: AboutEntity) {
    return this.aboutService.create(aboutData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() aboutData: AboutEntity) {
    return this.aboutService.update(id, aboutData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.aboutService.delete(id);
  }
}
