import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './database/database.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes .env variables accessible globally
      envFilePath: '.env',
    }),
    DatabaseModule,
    ProjectsModule,
    AboutModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
